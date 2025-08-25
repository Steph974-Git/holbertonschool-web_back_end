export default function getStudentsByLocation(Students, city) {
  if (!Array.isArray(Students)) {
    return [];
  }
  return Students.filter((student) => student.location === city);
}
