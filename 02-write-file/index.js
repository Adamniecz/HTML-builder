const fs = require('fs');
const path = require('path');

const readableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('Hi there!');

process.stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  } else {
    readableStream.write(data);
  }
});

process.on('SIGINT', () => {
  process.exit();
});

process.on('exit', () => {
  console.log('Goodbye!');
});

