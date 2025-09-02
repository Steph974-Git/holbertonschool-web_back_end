const { readFile } = require('fs').promises;

async function countStudents(path) {
  let raw;
  try {
    raw = await readFile(path, 'utf8');

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

    const groups = {};

    for (const row of rows) {
      const cols = row.split(',');
      const firstname = cols[idxFirstName] ? cols[idxFirstName].trim() : '';
      const field = cols[idxField] ? cols[idxField].trim() : '';

      if (!firstname || !field) continue;

      if (!groups[field]) groups[field] = [];
      groups[field].push(firstname);
    }

    const total = Object.values(groups).reduce((acc, list) => acc + list.length, 0);
    console.log(`Number of students: ${total}`);

    for (const field of Object.keys(groups).sort()) {
      const list = groups[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
