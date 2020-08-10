// http://localhost:3000/?action=add&n1=20&n2=20
// http://localhost:3000/calc/add/20/20

const http = require('http')
const url = require('url')
// console.log(url)
// process.exit()

const webserver = http.createServer((req, res) => {
    const { in_url, method } = req;

    if (url.includes('/?')) {
        //  http://localhost:3000/?action=add&n1=20&n2=20
        const urlObject = url.parse(in_url)
        console.log(url);
    } else {
        // http://localhost:3000/calc/add/20/20
        const qsItems = url.substring(1).split('/');
        console.log(qsItems)
    }

    res.end();
});


webserver.listen(3000, () => console.log('Running and listening on port 3000'))



