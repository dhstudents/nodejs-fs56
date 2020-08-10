//#region Modules
// https://nodejs.org/api/modules.html
// core modules
// fs - file system
// http / https - lounch server send response
// path
// os
//#endregion
const http = require('http')

function handleRequest(req, res) {
    console.log(req)
}

//http.createServer(handleRequest)
const webserver = http.createServer((req, res) => {
    console.log(req)
   // process.exit()
});


// keep on running and accepting requests with the callback in line 18
webserver.listen(3000, () => console.log('Running and listening on port 3000'))


// call it from browser http://localhost:3000
// watch the terminal output

// CTRL + C will stop the application in the terminal