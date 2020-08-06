const calc = require('./calc-module')


const r = new Calculator(8, 8)['add']
console.log(r)

console.log((new Calculator(8,7)).mul)