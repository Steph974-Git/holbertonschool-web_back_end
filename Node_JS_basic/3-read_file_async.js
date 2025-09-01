// 3-read_file_async.js

// 1) importer soit fs.promises, soit fs
fs.promises.readFile
const { readFile } = require('fs').promises

function countStudents(path) {
  // 2) Retourner une Promise (directement si readFile promisifiée, sinon new Promise)
  // return readFile(path, 'utf8')
  //   .then((data) => {
  //     // 3) transformer data -> lignes non vides
  //     // const lines = ...
  //     // const rows = ... (enlever l'en-tête)
  //
  //     // 4) agréger par field { field: [firstnames] }
  //     // const groups = {}
  //     // pour chaque row:
  //     //   const cols = row.split(',')
  //     //   const firstname = ...
  //     //   const field = ...
  //     //   si groups[field] n'existe pas -> l'initialiser []
  //     //   pousser firstname
  //
  //     // 5) logger total
  //     // console.log(`Number of students: ...`)
  //
  //     // 6) logger chaque field avec la liste join(', ')
  //     // for (const f of ...) { console.log(...) }
  //
  //     // 7) optionnel: retourner quelque chose (ex: groups) pour tests internes
  //     // return groups
  //   })
  //   .catch((err) => {
  //     // 8) normaliser l'erreur demandée
  //     throw new Error('Cannot load the database')
  //   })

  // Variante callback:
  // return new Promise((resolve, reject) => {
  //   fs.readFile(path, 'utf8', (err, data) => {
  //     if (err) return reject(new Error('Cannot load the database'))
  //     try {
  //       // même parsing/agrégation/logs que ci-dessus
  //       resolve(/* éventuellement une valeur */)
  //     } catch (_) {
  //       reject(new Error('Cannot load the database'))
  //     }
  //   })
  // })
}

module.exports = countStudents
