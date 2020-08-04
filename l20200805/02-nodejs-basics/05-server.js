const http = require('http')


function handleRequest(req, res) {
    console.log(req)
}

// analize routes
const webserver = http.createServer((req, res) => {
    const { url, method } = req;

    if (url === '/') {
        res.write('<html>')
        res.write('<head>')
        res.write('<title>Message</title>')
        res.write('<body><form action="/message" method="POST">')
        res.write('<input type="text" name="message">')
        res.write('<button type="sumit">Submit</button>')
        res.write('</from ></body > ')
        res.write('</head>')
        res.write('</html>')
        return res.end();
    }
    
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Response</title>')
    res.write('<body><h1>Hello from server' + Date.now().toString()+ '</h1></body>')
    res.write('</head>')
    res.write('</html>')
    res.end();

});


webserver.listen(3000, () => console.log('Running and listening on port 3000'))



