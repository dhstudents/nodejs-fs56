const http = require('http')


function handleRequest(req, res) {
    console.log(req)
}

// send response
// restart server for every change
const webserver = http.createServer((req, res) => {
    // res.setHeader('Content-Type' , 'text/plain')
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Response</title>')
    res.write('<body><h1>Hello from server</h1></body>')
    res.write('</head>')
    res.write('</html>')
    res.end();
    // res.write() // ERROR !!!!
    // console.log(res)
});


webserver.listen(3000, () => console.log('Running and listening on port 3000'))



