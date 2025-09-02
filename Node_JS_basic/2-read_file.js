const fs = require('fs');

function countStudents(path) {
  try {
    // 1. Lire le fichier CSV
    const fileContent = fs.readFileSync(path, 'utf8');
    
    // 2. Diviser en lignes et enlever les lignes vides
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');
    
    // 3. Vérifier s'il y a des données (au moins une ligne d'en-tête + des étudiants)
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }
    
    // 4. Séparer l'en-tête des données étudiants
    const header = lines[0]; // Première ligne = en-tête
    const studentLines = lines.slice(1); // Toutes les autres lignes = étudiants
    
    // 5. Créer un objet pour regrouper les étudiants par filière
    const studentsByField = {}; // { CS: ['Johann', 'Katie'], SWE: ['Paul'] }
    
    // 6. Traiter chaque ligne d'étudiant
    studentLines.forEach(line => {
      const parts = line.split(','); // Séparer par virgules
      
      // Vérifier que la ligne a assez de données
      if (parts.length < 4) return;
      
      const firstname = parts[0].trim(); // Premier nom
      const field = parts[3].trim();     // Filière (4ème colonne)
      
      // Ignorer les lignes incomplètes
      if (!firstname || !field) return;
      
      // Ajouter l'étudiant à sa filière
      if (!studentsByField[field]) {
        studentsByField[field] = []; // Créer la liste si elle n'existe pas
      }
      studentsByField[field].push(firstname);
    });
    
    // 7. Calculer le nombre total d'étudiants
    let totalStudents = 0;
    Object.values(studentsByField).forEach(students => {
      totalStudents += students.length;
    });
    console.log(`Number of students: ${totalStudents}`);
    
    // 8. Afficher les résultats par filière (ordre alphabétique)
    const fields = Object.keys(studentsByField).sort(); // Trier les filières
    fields.forEach(field => {
      const students = studentsByField[field];
      const studentList = students.join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentList}`);
    });
    
  } catch (error) {
    // Si le fichier n'existe pas ou ne peut pas être lu
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
