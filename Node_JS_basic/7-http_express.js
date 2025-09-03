const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  const originalLog = console.log;
  let output = '';
  console.log = (data) => { output += `${data}\n`; };

  res.write('This is the list of our students\n');

  countStudents(databasePath)
    .then(() => {
      console.log = originalLog;
      res.end(output.trim());
    })
    .catch(() => {
      console.log = originalLog;
      res.end('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
