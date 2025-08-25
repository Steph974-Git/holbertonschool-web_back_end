export default function getListStudentIds(getListStudents) {
  if (!Array.isArray(getListStudents)) {
    return []
  }
  return getListStudents.map((getListStudents) => getListStudents.id);
}
