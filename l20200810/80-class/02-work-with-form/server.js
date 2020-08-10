const http = require('http')
const fs = require('fs')
// URL METHOD : / GET
const server = http.createServer(
    (req, res) => {
        const { url, method } = req;

        if (url === '/') {
            const indexHtml = fs.readFileSync(__dirname + "/index.html")
            return res.end(indexHtml)
        }

        if (url === "/message" && method === "POST") {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk)
                console.log(chunk)
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                // message=abc
                console.log(parsedBody)
                const message = parsedBody.split('=')[1]
                fs.writeFileSync('message.txt', message)
                res.statusCode = 302;
                res.setHeader('Location', '/')
                res.end();
            })
            return 
            
            
        }

        // res.setHeader('content-type'  ,'application/json')
        // res.end(JSON.stringify({
        //     url,
        //     method
        // }))
    }
)

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})