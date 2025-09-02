const fs = require('fs');

function countStudents(path) {
  try {
    // 1. Lire le fichier CSV
    const data = fs.readFileSync(path, 'utf8');
    
    // 2. Diviser en lignes, enlever l'en-tête et filtrer les lignes vides
    const lines = data.split('\n').slice(1).filter((line) => line !== '');

    // 3. Transformer chaque ligne en objet étudiant simple
    const students = lines
      .map((line) => {
        const parts = line.split(',');
        return { 
          firstname: parts[0], 
          field: parts[parts.length - 1] // Dernière colonne = filière
        };
      })
      .filter((student) => student.firstname && student.field); // Garder seulement les étudiants valides

    // 4. Regrouper les étudiants par filière
    const studentsByField = {};
    students.forEach(({ firstname, field }) => {
      if (!studentsByField[field]) { 
        studentsByField[field] = []; 
      }
      studentsByField[field].push(firstname);
    });

    // 5. Afficher le nombre total d'étudiants
    console.log(`Number of students: ${students.length}`);

    // 6. Afficher les résultats par filière
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
