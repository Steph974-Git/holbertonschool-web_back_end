export default function appendToEachArrayValue(array, appendString) {
  let result = [];
  for (const value of array) {
    result.push(appendString + value);
  }

  return result;
}
