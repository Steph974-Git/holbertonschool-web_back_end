const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');

    const students = lines
      .map((line) => {
        const parts = line.split(',');
        return { firstname: parts[0], field: parts[parts.length - 1] };
      })
      .filter((student) => student.firstname && student.field);

    const studentsByField = {};
    students.forEach(({ firstname, field }) => {
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    let result = `Number of students: ${students.length}`;

    for (const fieldName in studentsByField) {
      const names = studentsByField[fieldName].join(', ');
      result += `\nNumber of students in ${fieldName}: ${studentsByField[fieldName].length}. List: ${names}`;
    }

    return result;

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
