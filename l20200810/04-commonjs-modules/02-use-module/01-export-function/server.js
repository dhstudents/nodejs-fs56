const http = require('http')
// here we get the function address
const requestHandler = require('./routes') 

const server = http.createServer(requestHandler)

server.listen(3000, () => {
    console.log('WITH MODULE: Server is running on port 3000')
})