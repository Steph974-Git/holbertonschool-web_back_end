const { readFile } = require('fs').promises;

async function countStudents(path) {
  let raw;
  try {
    raw = await readFile(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = String(raw)
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  const header = lines[0].split(',');
  const rows = lines.slice(1);

  const idxFirstName = header.findIndex((h) => h.trim() === 'firstname');
  const idxField = header.findIndex((h) => h.trim() === 'field');

  if (idxFirstName === -1 || idxField === -1) {
    console.log('Number of students: 0');
    return;
  }

  // Agrégation par field + garder l'ordre d'apparition
  const groups = {};
  const fieldsOrder = []; // Pour préserver l'ordre d'apparition

  for (const row of rows) {
    const cols = row.split(',');
    const firstname = cols[idxFirstName] ? cols[idxFirstName].trim() : '';
    const field = cols[idxField] ? cols[idxField].trim() : '';

    // Une ligne vide ou incomplète n'est pas un étudiant valide
    if (!firstname || !field) continue;

    if (!groups[field]) {
      groups[field] = [];
      fieldsOrder.push(field); // Ajouter le field dans l'ordre d'apparition
    }
    groups[field].push(firstname);
  }

  // Total
  const total = Object.values(groups).reduce((acc, list) => acc + list.length, 0);
  console.log(`Number of students: ${total}`);

  // Détail par field (ordre d'apparition préservé)
  for (const field of fieldsOrder) {
    const list = groups[field];
    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
  }
}

module.exports = countStudents;
