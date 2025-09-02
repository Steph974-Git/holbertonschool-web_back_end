const fs = require('fs');

function countStudents(path) {
  let raw;
  try {
    // Lecture synchrone, texte UTF-8
    raw = fs.readFileSync(path, 'utf8');
  } catch (err) {
    // Message d'erreur demandé explicitement par l'énoncé
    throw new Error('Cannot load the database');
  }

  // Nettoyage: découper en lignes, virer les lignes vides
  const lines = String(raw)
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length <= 1) {
    // Il n'y a que l'en-tête ou rien: 0 étudiant
    console.log('Number of students: 0');
    return;
  }

  // La première ligne est l'en-tête
  const header = lines[0].split(',');
  const rows = lines.slice(1);

  // Indices utiles: on cherche firstname et field de manière robuste
  const idxFirstName = header.findIndex((h) => h.trim() === 'firstname');
  const idxField = header.findIndex((h) => h.trim() === 'field');

  if (idxFirstName === -1 || idxField === -1) {
    // CSV invalide vis-à-vis de ce qu'on attend
    console.log('Number of students: 0');
    return;
  }

  // Agrégation par field + garder l'ordre d'apparition
  const groups = {}; // ex: { CS: ['Johann', 'Katie'], SWE: ['Guillaume'] }
  const fieldsOrder = []; // Pour préserver l'ordre d'apparition

  for (const line of rows) {
    // Un CSV propre doit avoir le même nombre de colonnes que l'entête
    const cols = line.split(',');
    if (cols.length !== header.length) {
      // Ligne corrompue: on l'ignore poliment
      continue;
    }

    const firstname = cols[idxFirstName].trim();
    const field = cols[idxField].trim();

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
