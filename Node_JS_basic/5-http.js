const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }
  
  if (req.url === '/students') {
    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
    return;
  }
  
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
