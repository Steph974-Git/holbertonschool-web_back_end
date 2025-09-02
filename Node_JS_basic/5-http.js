const http = require('http');
const countStudents = require('./3-read_file_async');

const dbPath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    
    try {
      const originalLog = console.log;
      let output = '';
      console.log = (message) => {
        output += message + '\n';
      };
      
      await countStudents(dbPath);
      
      console.log = originalLog;
      
      res.end(output.trimEnd());
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
