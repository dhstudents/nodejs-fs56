// http://localhost:3000/?action=add&n1=20&n2=20
// http://localhost:3000/calc/add/20/20

const http = require('http')
const qs = require('querystring')
// console.log(qs)
// process.exit()

const webserver = http.createServer((req, res) => {
    const { url, method } = req;

    if (url.includes('/?')) {
        //  http://localhost:3000/?action=add&n1=20&n2=20
        const qsObject = qs.parse(url.substr(2))
        console.log(qsObject);
    } else {
        // http://localhost:3000/calc/add/20/20
        const qsItems = url.substring(1).split('/');
        console.log(qsItems)
    }

    res.end();
});


webserver.listen(3000, () => console.log('Running and listening on port 3000'))



