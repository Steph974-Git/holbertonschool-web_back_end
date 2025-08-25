export default function updateStudentGradeByCity(Students, city, newGrades) {
  const studentsInCity = Students.filter((student) => student.location === city);
  const studentAddnot = studentsInCity.map((Student) => {
    const notes = newGrades.find((notes) => notes.studentId === Student.id);
    return { ...Student, grade: notes ? notes.grade : "N/A" };
  });
  return studentAddnot;
}
