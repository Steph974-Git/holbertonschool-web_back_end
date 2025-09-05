import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];
    
    try {
      const students = await readDatabase(filePath);

      let response = 'This is the list of our students\n';

      const fields = Object.keys(students).sort(); // Ajout de "const"

      fields.forEach(field => {
        const studentList = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`;
      });
      
      res.status(200).send(response.trim());
      
    } catch (error) { // Correction de l'indentation
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const filePath = process.argv[2]; // Ajout de cette ligne

    // Correction de la condition : si ce N'EST PAS CS ou SWE
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send("Major parameter must be CS or SWE");
    }

    try {
      const students = await readDatabase(filePath);
      const selectedStudents = students[major] || []; // Protection si pas d'étudiants
      
      // Format demandé : "List: firstname1, firstname2, firstname3"
      const response = `List: ${selectedStudents.join(', ')}`;
      res.status(200).send(response);
      
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
