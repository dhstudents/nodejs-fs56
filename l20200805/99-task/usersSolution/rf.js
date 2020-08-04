const fs = require('fs');

fs.readFile('u.txt', (error, data) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log("ok")

    }
})