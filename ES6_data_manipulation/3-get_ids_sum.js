export default function getStudentIdsSum(Students) {
    return Students.reduce((sum, student) => sum + student.id, 0);
}
