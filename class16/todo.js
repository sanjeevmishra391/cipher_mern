const fs = require('fs');

// add 'Buy Milk'
// list

const cmd = process.argv[2];
const todo = process.argv[3];

if (cmd === 'add') {
  fs.appendFileSync('todo.txt', todo + '\n');
  console.log('Todo added');
} else if (cmd === 'list') {
  const todos = fs.readFileSync('todo.txt', 'utf8');
  console.log('..... Your todos .....');
  console.log(todos);
}