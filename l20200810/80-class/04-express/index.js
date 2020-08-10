const express = require('express');
const app = express() // exports a function


app.get('/', (req, res) => {
    res.send(`<div>
        <h1>Using params in Express</h1>
        <p>Route: /employee<br>
           Params: department = 20 , employeeId = 10<br>
        <h4>1. REST: http://localhost:3000/employee/20/10</h4><br>
        <h4>2. QUERYSTRING: http://localhost:3000/employee/?department=20&employeeid=10</h4>  </p>
        `)
    })

app.get('/employee/:deprtment/:employeeId', (req, res) => {
    console.log("REST:" , req.params)
    const { department , employeeId} = req.params
    res.send(`<h1>[Rest Result <u style="color: red">req.params</u>] DEPR : ${department} EMPID : ${employeeId}`)
})

app.get('/employee/' , (req, res) => {
    console.log("QUERY", req.query)
    const { department , employeeid} = req.query
    res.send(`<h1>[Query Result <u style="color: red">req.query</u>] DEPR : ${department} EMPID : ${employeeid}`)
})

app.listen(3000, () => {
    console.log("EXPRESS SENDING PARAMS\n running on port 3000")
})



