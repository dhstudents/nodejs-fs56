const http = require('http')
const fs = require('fs')
// URL METHOD : / GET
const server = http.createServer(
    (req, res) => {
        const { url, method } = req;
// localhost:3000
        if (url === '/') {
            const indexHtml = fs.readFileSync(__dirname + "/index.html")
            return res.end(indexHtml)
        }

        if (url === "/register" && method === "GET") { 
            const indexHtml = fs.readFileSync(__dirname + "/register-form.html")
            return res.end(indexHtml)
        }

        if (url === "/login" && method === "GET") { 
            const indexHtml = fs.readFileSync(__dirname + "/login-form.html")
            return res.end(indexHtml)
        }

        if (url === "/register" && method === "POST") {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk)
                console.log(chunk)
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                // username=xyz&password=1234
                console.log(parsedBody)
                const fileContent = parsedBody.split('&')
                const fileName = fileContent[0].split('=')[1] + ".txt"
                fs.writeFileSync(fileName , fileContent.join('\n'))
                res.statusCode = 302;
                res.setHeader('Location', '/login') 
                res.end();
            })
            return 
        }

        if (url === "/login" && method === "POST") {
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk)
                console.log(chunk)
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                // message=abc
                console.log(parsedBody)
                const fileContent = parsedBody.split('&')
                const fileName = fileContent[0].split('=')[1] + ".txt"
              
                // fs.writeFileSync(fileName , fileContent.join('\n'))
                // res.statusCode = 302;
               // res.setHeader('Location', '/login')
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