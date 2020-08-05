const fs = require('fs'); // import 
const content = fs.readFileSync('app.js' , 'utf-8')
console.log(content)