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

// 2-read_file.js
const fs = require('fs');

function countStudents(path) {
  try {
    const raw = fs.readFileSync(path, 'utf8');

    // 1) lignes utiles (on vire l'en-tête et les lignes vides)
    const rows = raw
      .split('\n')
      .slice(1)
      .map((l) => l.trim())
      .filter((l) => l !== '');

    // 2) un seul passage: on construit { field: [firstnames] }
    const byField = rows.reduce((acc, line) => {
      const cols = line.split(',');
      const firstname = cols[0]?.trim();
      const field = cols[3]?.trim(); // index fixe pour field (exigence projet)

      if (!firstname || !field) return acc; // ignore lignes invalides

      if (!acc[field]) acc[field] = [];
      acc[field].push(firstname);
      return acc;
    }, {});

    // 3) total = somme des longueurs
    const total = Object.values(byField).reduce((n, arr) => n + arr.length, 0);
    console.log(`Number of students: ${total}`);

    // 4) sortie par filière (tri pour stabilité)
    for (const field of Object.keys(byField).sort()) {
      const list = byField[field];
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
      );
    }
  } catch {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
