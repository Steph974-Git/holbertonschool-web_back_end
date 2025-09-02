const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    
    // Filtrer les lignes vides et extraire les données
    const rows = data.split(/\r?\n/)
      .filter(line => line.trim())
      .slice(1) // Enlever le header
      .map(row => row.split(','))
      .filter(parts => parts.length >= 4 && parts[0]?.trim() && parts[3]?.trim());
    
    // Grouper par filière avec reduce
    const parFiliere = rows.reduce((acc, parts) => {
      const firstname = parts[0].trim();
      const field = parts[3].trim(); // Index fixe pour le field
      
      acc[field] = acc[field] || [];
      acc[field].push(firstname);
      return acc;
    }, {});
    
    // Calculer et afficher le total
    const total = rows.length;
    console.log(`Number of students: ${total}`);
    
    // Afficher par filière dans l'ordre alphabétique
    Object.keys(parFiliere).sort().forEach(field => {
      const students = parFiliere[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
    
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
