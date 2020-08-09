const express = require('express');
const app = express() // exports a function

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/message', (req, res) => {
    console.log(req.body);
    res.send(`<h1>how to get data sent from the form with post`)
   // res.redirect('/')
})


app.listen(3000, () => {
    console.log("EXPRESS SERVER Handling POTS:\n running on port 3000")
})