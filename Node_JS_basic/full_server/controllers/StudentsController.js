import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    
    try {
      const students = await readDatabase(filePath);

      let response = 'This is the list of our students\n';

      const fields = Object.keys(students).sort();

      fields.forEach((field) => {
        const studentList = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`;
      });
      
      return res.status(200).send(response.trim());
      
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(filePath);
      const selectedStudents = students[major] || [];
      
      const response = `List: ${selectedStudents.join(', ')}`;
      return res.status(200).send(response);
      
    } catch {
      return res.status(500).send('Cannot load the database');
    }
  }
}
