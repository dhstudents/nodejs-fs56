const express = require('express');
const app = express() // exports a function

app.get('/', (req, res) => {
    res.send(`<h1>API routes Express Version</h1>
    Home Page<br>
    <p>http://localhost:3000  - Home</p>
    <p>http://localhost:3000/api/time     - server time</p>
    <p>http://localhost:3000/api/isodate  - ISO date</p>
    <p>http://localhost:3000/api/gmtdate  - GMT date</p>`
    )
})

app.get('/api/time', (req, res) => {
    const time = new Date();
    res.send(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
})

app.get('/api/isodate', (req, res) => {
    const date = new Date();
    res.end(`${date.toISOString()}`)    
})
app.get('/api/gmtdate', (req, res) => {
    const date = new Date();
    res.end(`${date.toGMTString()}`)    
})





app.listen(3000, () => {
    console.log("EXPRESS SERVER WITH ROUTES\n running on port 3000")
})



