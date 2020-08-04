const fs = require('fs');
const content = fs.readFileSync('data.txt', 'utf-8')
console.clear()
console.log(content)