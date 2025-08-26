export default function updateUniqueItems(List) {
  if (!(List instanceof Map)) {
    throw new Error("Cannot process");
  }
  for (const [key, value] of List) {
    if (value === 1) {
      List.set(key, 100);
    }
  }
  return List;
}
