const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1).filter((line) => line !== '');

    const students = lines
      .map((line) => {
        const parts = line.split(',');
        return { firstname: parts[0], field: parts[parts.length - 1] };
      })
      .filter((student) => student.firstname && student.field);

    const studentsByField = {};
    students.forEach(({ firstname, field }) => {
      if (!studentsByField[field]) { studentsByField[field] = []; }
      studentsByField[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    for (const fieldName in studentsByField) {
      if (studentsByField[fieldName]) {
        const listFirstnames = studentsByField[fieldName].join(', ');
        console.log(`Number of students in ${fieldName}: ${studentsByField[fieldName].length}. List: ${listFirstnames}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
