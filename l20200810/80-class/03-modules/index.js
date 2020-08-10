const http = require('http')
// here we get the whole object
const routes = require('./routes') // return module.exports

const server = http.createServer(routes.requestHandler)

server.listen(3000, () => {
    console.log('WITH MODULE: Server is running on port 3000\n routes: ' + routes.loadedOn.toISOString())
})