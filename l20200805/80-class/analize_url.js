const http = require('http');
const urlp = require('url') // core module

const users = [
    { id: 1, name: 'shalom baderian' },
    { id: 2, name: 'shosh baderian' },
    { id: 3, name: 'ben baderian' }
]

const server = http.createServer((req, res) => {
    let { url } = req;
    // /users/1
    // /users

    if (url.includes('?')) {
        // query
        const urlObject = urlp.parse(url, true)
        //console.log(urlObject)
        url = urlObject.pathname
        const { id } = urlObject.query   // { id: 1}
        if (url === "/users") {
            if (id) {
                result = users.find(u => u.id === +id)  
                if (!result) {
                    result = { error: 'user not found...'}
                }
            } else {
                result = [...users]                
            }
            res.write(JSON.stringify(result))
            res.end()
        }
    } else {
        // rest
        const items = url.substring(1).split('/')
        let result
        url = "/" + items[0]
        if (url === "/users") {
            // /users/1
            if (items[1]) {
                result = users.find(u => u.id === +items[1])
            } else {
                // /users
                result = [...users]
            }
            res.write(JSON.stringify(result))
            res.end()
        }








        console.log('ok')
    }

    // res.setHeader('Content-Type', 'text/html')
    // res.write(url);
    // res.end('<br>ok');
}
)


server.listen(3000, () => console.log('run on port 3000'))