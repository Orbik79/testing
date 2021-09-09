const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Welcome To Our Home Page')
        res.end()
    } else if (req.url === '/about') {
        res.write('Welcome To Our About Page')
        res.end()
    } else {
        res.write('Cannot find the page')
        res.end()
    }



})

server.listen(5000)