const http = require('http')
const fs = require('fs')

//event driven
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
    
    if (url === '/message' && method === "POST") {
        const body = []
        req.on('data', chunk => {
            console.log(chunk)
            body.push(chunk)
        });
        return req.on('end', chunk => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            // fs.writeFileSync('message.txt', message); // problem in huge files - blocking execution
            fs.writeFile('message.txt', message, error => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                res.end();
            })
        });
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



