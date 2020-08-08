const http = require('http')
const fs = require('fs')
// FORM POST GET
const server = http.createServer(
    (req, res) => {
        const { url, method } = req;
 
        if (url === '/') {
            const indexHtml = fs.readFileSync(__dirname + "/index.html")
            return res.end(indexHtml)
        }
 
 
        res.setHeader('content-type'  ,'application/json')
        res.end(JSON.stringify({
            url,
            method
        }))
    }
)

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})