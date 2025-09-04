const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
	fs.readFile(path, 'utf-8', (err, data) => {
	  if (err) {
		reject(new Error('Cannot load the database'));
	  } else {
		try {
		  const lines = data.split('\n').slice(1).filter((line) => line !== '');

		  const students = {};

		  lines.forEach((line) => {
			const parts = line.split(',');
			const firstname = parts[0]?.trim();
			const field = parts[3]?.trim();

			if (firstname && field) {
			  if (!students[field]) {
				students[field] = [];
			  }
			  students[field].push(firstname);
			}
		  });
		  resolve(students);
		} catch (parseError) {
		  reject(new Error('Cannot load the database'));
		}
	  }
	});
  });
}

module.exports = { readDatabase };
