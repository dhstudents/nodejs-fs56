const http = require('http')
// URL METHOD : / GET
const server = http.createServer(
    (req, res) => {
        const { url, method } = req;
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