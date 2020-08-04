// https://nodejs.org/en/knowledge/HTTP/clients/how-to-access-query-string-parameters/
const http = require('http');
const fs = require('fs');

const urlp = require('url')

const server = http.createServer((req, res) => {
  let {
    url,
    method
  } = req;

  const urlObject = urlp.parse(req.url, true)


  if (url.includes('?')) {
    url = urlObject.pathname;
  }

  if (url === '/' && method.toUpperCase() === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write(HomePage())
    return res.end();
  }
  if (url === '/users' && method.toUpperCase() === "GET") {
    res.setHeader('Content-Type', 'text/html');
    allUsers(res)
    return 
  }

  if (url === '/userForm' && method.toUpperCase() === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write(userForm("getuser", "GET"))
    return res.end();
  }

  if (url === '/getuser' && method.toUpperCase() === "GET") {
    res.setHeader('Content-Type', 'text/html');
    getUserName(res)
    return;
   
  }


  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
  console.log(url + " not found..")
});


server.listen(3000, () => console.log('listen on port 3000'));

function HomePage() {
  return `<html>
    <head>
        <title>Users</title>
    </head>
    <body>
      <a href="/users">Get All Users</a><br>
      <a href="/userForm">Get User</a><br> 
    </body>
  `
}

function allUsers(res) {
  fs.readFile('users.txt', function(error, data)  {
    if (error) {
     res.write(`<li>${error.message}</li>`)
    } else {
      res.write(`
                <a href="/">Back</a>
                <hr>
                <ul>${createListItems(data)}</ul>
            `)
    }
    res.end();

})

}

function createListItems(users) {
  if (users) {
    return users.split(',').map(userName => '<li>${userName}</li>')
  } else {
    return '<li>No users....</li>'
  }
}


function userForm(action, method) {
  return `
      <a href="/">Back</a>
      <hr>
      <h1>Get A User</h1>
      <form action="/${action}" method="${method}">
        <input type="text" name="userid">
        <button type="submit">${method === "GET" ? "Get" : "Add" } User</button>
      </form>
  `
}


function getUserName(res) {
  fs.readFile('users.txt', (error ,data) => {
    if (error) {
      res.write(`<li>${error.message}</li>`)
    } else {
      res.write("<h1>HHH</h1>")
    }
    res.end()
  })
}



/* <body>
<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body> */