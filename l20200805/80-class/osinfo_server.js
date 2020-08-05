const http = require('http')
const os = require('os');
const PORT = 3200;
const server = http.createServer(  (req , res) => {
    const { url } = req;

    if (url === '/') {
        res.write('<h1>home page</h1>')
        res.write('<a href="/cpus">Cpus</a><br>')
        res.write('<a href="/homedir">Home Dir</a></br>')
        res.write('<a href="/platform">Platform</a><br>')
        res.write('<a href="/summary">Summary</a>')
        return res.end()
    }

    if (url === '/cpus') {
        res.write('<a href="/">back</a><br>')
        res.write(JSON.stringify(os.cpus(), null, 4))
        return res.end()
    }

    if (url === '/homedir') {
        res.write(os.homedir())
        return res.end()
    }

    if (url === '/platform') {
        res.write(os.platform())
        return res.end()
    }

    if (url === '/summary') {
        res.write('<h1>summary info</h1>')
        res.write('<br>')
        res.write(os.homedir())
        res.write('<br>')
        res.write(os.platform())
        res.write('<br>')
        res.write(JSON.stringify(os.cpus(), null, 4))
        return res.end()
    }
}) 

server.listen(PORT , () => console.log('running on port ' + PORT))