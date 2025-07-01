const os = require('os');


console.log("Node js app");
console.log(__dirname);

console.log(os.hostname());
console.log(os.platform())

console.log(process.pid);
console.log(process.argv);

const args = process.argv;

const nameArg = args.find(arg => arg.includes('--name'));
// --name  Sanjeev
const name = nameArg ? nameArg.split('=')[1] : 'Guest';
console.log(`Hello ${name}`);

console.error(new Error('Whoops, something bad happened'));

console.warn(`Danger ${name}! Danger!`);