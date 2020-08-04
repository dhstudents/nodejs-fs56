const http = require('http')


function handleRequest(req, res) {
    console.log(req)
}


// understand incoming request 

const webserver = http.createServer((req, res) => {
    console.log(req.url)
    console.log("-".repeat(60))
    console.log(req.method)
    console.log("-".repeat(60))
    console.log(req.headers)
    console.log("-".repeat(60))


});


webserver.listen(3000, () => console.log('Running and listening on port 3000'))

// http://localhost:3000
// http://localhost:3000/test
// http://localhost:3000/ask?time=usa
// browser freeze ..... why? waiting for response


