const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
    console.log('Error while reading file');
    return;
  }

  console.log(data);
});

const myName = 'Akanksha';

fs.writeFile('file.txt', myName, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully written to file");
  }
});

fs.appendFile('file.txt', myName, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully written to file");
  }
});
