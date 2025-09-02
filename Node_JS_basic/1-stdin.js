console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const text = input.toString().trim();
  console.log(`Your name is: ${text}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
