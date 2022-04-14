const { stderr } = require('process');
const { connect } = require('./client');

connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    if (key === "\u0003") {
      process.exit();
    }
  });
  return stdin;
};

// const handleUserInput = function (key) {
//   if (key === "\u0003") {
//     process.exit();
//   }
// }

setupInput();