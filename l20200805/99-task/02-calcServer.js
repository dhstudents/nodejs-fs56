const http = require('http')
const url = require('url')
// console.log(qs)
// process.exit()
const webserver = http.createServer((req, res) => {
    const { url : req_url, method } = req;

    if (req_url.includes('/?')) {
        //  http://localhost:3000/?action=add&n1=20&n2=20
        //  http://localhost:3000/?action=sub&n1=20&n2=20
        //  http://localhost:3000/?action=mul&n1=20&n2=20
        //  http://localhost:3000/?action=div&n1=20&n2=20
        const qObject = url.parse(req_url, true).query
        console.log(qObject);
    } else {
        // http://localhost:3000/add/20/20
        // http://localhost:3000/sub/20/20
        // http://localhost:3000/mul/20/20
        // http://localhost:3000/div/20/20
        const qItems = req_url.substring(1).split('/');
        console.log(qItems)
    }

    res.end("<h1>End!!!!</h1>");
});


webserver.listen(3000, () => console.log('Running and listening on port 3000'))



