// 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = String(data)
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (lines.length <= 1) {
      // seulement l'en-tête ou rien
      console.log('Number of students: 0');
      return 'Number of students: 0';
    }

    const header = lines[0].split(',').map((h) => h.trim());
    const rows = lines.slice(1);

    const idxFirst = header.findIndex((h) => h.toLowerCase() === 'firstname');
    const idxField = header.findIndex((h) => h.toLowerCase() === 'field');

    // En cas d'entête foireuse, on considère 0 étudiant
    if (idxFirst === -1 || idxField === -1) {
      console.log('Number of students: 0');
      return 'Number of students: 0';
    }

    // parse étudiants
    const students = rows
      .map((row) => row.split(',').map((c) => c.trim()))
      .filter((cols) => cols.length > Math.max(idxFirst, idxField))
      .map((cols) => ({ firstname: cols[idxFirst], field: cols[idxField] }))
      .filter((s) => s.firstname && s.field);

    // group by field
    const byField = {};
    for (const { firstname, field } of students) {
      if (!byField[field]) byField[field] = [];
      byField[field].push(firstname);
    }

    // logs console requis par l’énoncé
    console.log(`Number of students: ${students.length}`);

    // ordre stable: d’abord CS puis SWE si présents, puis le reste trié
    const preferred = ['CS', 'SWE'];
    const others = Object.keys(byField)
      .filter((f) => !preferred.includes(f))
      .sort();

    const orderedFields = [...preferred.filter((f) => byField[f]), ...others];

    for (const f of orderedFields) {
      console.log(
        `Number of students in ${f}: ${byField[f].length}. List: ${byField[f].join(', ')}`
      );
    }

    // retourne aussi une chaîne exploitable par 5-http.js
    let result = `Number of students: ${students.length}`;
    for (const f of orderedFields) {
      result += `\nNumber of students in ${f}: ${byField[f].length}. List: ${byField[f].join(', ')}`;
    }
    return result;
  } catch {
    // message exact exigé
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
