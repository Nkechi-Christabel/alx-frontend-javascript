export default function getListStudentIds(arg) {
  if (Array.isArray(arg)) {
    return arg.map((obj) => obj.id);
  }
  return [];
}
