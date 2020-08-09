const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path');

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get add() {
        return this.a + this.b
    }
    get sub() {
        return this.a - this.b
    }
    get mul() {
        return this.a * this.b
    }
    get div() {
        return this.a / this.b
    }
}

const server = http.createServer( requestHandler )

server.listen(3000, () => console.log('run on port 3000'))


function requestHandler(req, res) {

    let { url: reqUrl } = req

    // send the index.html
    if (reqUrl === '/') {
        const html = fs.readFileSync(__dirname + '/index.html' )
        return res.end(html)
    }

    if (reqUrl.includes('?')) {
        handleQueryUrl(reqUrl , res)
    } else {
        handleRestUrl(reqUrl , res)
    }

}

function handleRestUrl(reqUrl, res) { 
   // res.end('Not implemented yet')
    const restParams = reqUrl.substring(1).split('/');
    if (validRestInput(restParams)) {
        const action = restParams[0];
        const n1 = +restParams[1]
        const n2 = +restParams[2]
        CalcAndSend(res , action , n1 , n2)
    }
}

function handleQueryUrl(reqUrl, res) {
    const urlObject = url.parse(reqUrl, true); // true to parse query string into object
    let result;
    if (validInput(urlObject.query)) {
        const { action, n1, n2 } = urlObject.query;
        CalcAndSend(  res , action , +n1 , +n2)
    }
}

function CalcAndSend(res, action, n1, n2) {
    result = new Calculator(n1, n2)[action]
    res.end(`<h1>Result of ${action} ${n1} and ${n2} is  ${result}`)
}

function validRestInput(paramArray) {
    return paramArray.length === 3
}

// if one of the properties is missing will return undefine e.g false
function validInput(q) {
    return q.action && q.n1 && q.n2
}