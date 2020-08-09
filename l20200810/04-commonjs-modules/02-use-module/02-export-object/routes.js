const loadedOn = new Date()

const requestHandler = (req, res) => {
    const {
        url,
        method
    } = req;

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

    res.end(`${url} - 404 Not found`)

}

// II - export an object the name of the properties is the same as original declaraion
module.exports = {
    requestHandler, 
    loadedOn
}

// III - export an object with rename its propeties
// module.exports.handle = requestHandler;
// module.exports.runtime = loadedOn;

// IV - export short cut
// exports.handle = requestHandler;
// exports.runtime = loadedOn;

