export default function signUpUser(firstName, lastName) {
  const character = { firstName: firstName, lastName: lastName };
  return Promise.resolve(character);
}
