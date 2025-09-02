const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1).filter((line) => line !== '');

    const students = lines
      .map((line) => {
        const parts = line.split(',');
        // Utilise la méthode findIndex pour être robuste comme le code qui passe
        const firstname = parts[0]?.trim();
        const field = parts[parts.length - 1]?.trim();
        return { firstname, field };
      })
      .filter((student) => student.firstname && student.field);

    const studentsByField = {};
    students.forEach(({ firstname, field }) => {
      if (!studentsByField[field]) { 
        studentsByField[field] = []; 
      }
      studentsByField[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    // Utilise Object.keys().sort() pour garantir l'ordre alphabétique
    for (const fieldName of Object.keys(studentsByField).sort()) {
      const listFirstnames = studentsByField[fieldName].join(', ');
      console.log(`Number of students in ${fieldName}: ${studentsByField[fieldName].length}. List: ${listFirstnames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
