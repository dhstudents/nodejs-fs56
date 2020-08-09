const http = require('http')
const fs = require('fs');

const server = http.createServer(
    (req, res) => {
        const { url, method } = req;

        if (url === '/') {

            fs.readFile('abc.txt', (err, data) => {
                if (err) {
                    res.end(`<h1>${err.code} : ${err.message}</h1>`)
                    return
                }
                
                res.end(data);
            })
            return 
        }
    }
)

server.listen(3000, () => {
    console.log('READ FILE With error handleing: \nServer is running on port 3000')
})