const http = require('http');
const countStudents = require('./3-read_file_async');

const dbPath = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(dbPath)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
