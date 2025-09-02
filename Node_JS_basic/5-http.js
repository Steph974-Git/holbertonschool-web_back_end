const http = require('http');
const countStudents = require('./3-read_file_async');

const dbPath = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let responseText = 'This is the list of our students\n';

    const originalLog = console.log;
    let output = '';
    console.log = (message) => {
      output += message + '\n';
    };

    countStudents(dbPath)
      .then(() => {
        console.log = originalLog;
        responseText += output.trimEnd();
        res.end(responseText);
      })
      .catch((error) => {
        console.log = originalLog;
        responseText += 'Cannot load the database';
        res.end(responseText);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
