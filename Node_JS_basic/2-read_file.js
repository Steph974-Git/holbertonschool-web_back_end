/**
 * countStudents (version synchrone)
 * - Lit un fichier CSV synchroniquement.
 * - Affiche:
 *   Number of students: N
 *   Number of students in FIELD: X. List: a, b, c
 * - En cas d'erreur de lecture, jette: "Cannot load the database"
 *
 * Hypothèse: le CSV a une 1re ligne d'en-têtes, contient au moins les colonnes:
 *   firstname, ..., field
 */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');

    const students = lines
      .map((line) => {
        const parts = line.split(',');
        return { firstname: parts[0]?.trim(), field: parts[3]?.trim() }; // Index fixe pour field
      })
      .filter((student) => student.firstname && student.field);

    const studentsByField = {};
    students.forEach(({ firstname, field }) => {
      if (!studentsByField[field]) { studentsByField[field] = []; }
      studentsByField[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);

    // Tri alphabétique des champs pour garantir l'ordre
    Object.keys(studentsByField).sort().forEach(fieldName => {
      const listFirstnames = studentsByField[fieldName].join(', ');
      console.log(`Number of students in ${fieldName}: ${studentsByField[fieldName].length}. List: ${listFirstnames}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
