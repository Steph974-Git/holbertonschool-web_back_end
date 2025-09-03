// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const dbPath = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    // Toujours commencer par l’entête
    countStudents(dbPath)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((err) => {
        // En erreur: entête + message exact
        res.end(`This is the list of our students\n${err.message}`);
      });
    return;
  }

  // Optionnel: pour tout le reste
  res.end('Not found');
});

app.listen(1245);

module.exports = app;
