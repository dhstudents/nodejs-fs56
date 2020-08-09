const http = require('http')
const server = http.createServer(
    (req, res) => {
        const { url, method } = req;

        if (url === '/') {

            res.write('<h1>API routes</h1>')
            res.write('Home Page<br>')
            res.write('<p>http://localhost:3000  - Home</p>')
            res.write('<p>http://localhost:3000/api/time     - server time</p>')
            res.write('<p>http://localhost:3000/api/isodate  - ISO date</p>')
            res.write('<p>http://localhost:3000/api/gmtdate  - GMT date</p>')
            res.end();
            return;
        }

        if (url === '/api/time') {
            const time = new Date();
            res.end(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
            return;
        }

        if (url === '/api/isodate') {
            const date = new Date();
            res.end(`${date.toISOString()}`)
            return;
        }

        if (url === '/api/gmtdate') {
            const date = new Date();
            res.end(`${date.toGMTString()}`)
            return;
        }
       
       
       
       
       
        // res.setHeader('content-type', 'application/json')
        // res.end(JSON.stringify({
        //     url,
        //     method
        // }))
    }
)

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})