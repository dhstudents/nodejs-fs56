const fs = require('fs');

const body = [] 
let buffer = fs.readFileSync(__dirname + '/dirname.js')
body.push(buffer)
buffer = fs.readFileSync(__dirname + '/rf.js')
body.push(buffer)

const str = Buffer.concat(body).toString()

console.log(str)