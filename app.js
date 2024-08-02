
const { log } = require('console')
const express = require('express')
const path = require('path')

const app = express()


app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.status(200).sendFile('D:\\_frontend\\chat\\index.html')
    log('access to : / , req.query = ' + req.query)
})

app.get('/prof/:age', (req, res)=>{
    res.status(200).send(`<h1>your age: ${req.params.age}</h1>`)
    log('access to : /prof/ , req.params = ' + req.params)
})


app.get('/style.css', (req, res)=>{
    res.status(200).sendFile('D:\\_frontend\\chat\\style.css')
    log('access to : /')
})

app.get('/script.js', (req, res)=>{
    res.status(200).sendFile('D:\\_frontend\\chat\\script.js')
    log('access to : /')
})


app.all('*', (req, res)=>{
    res.status(404).send('<h4 style="color=red; padding=50px"> Resource not found!</h4>')
})


app.listen(8080, ()=>{
    log('listening on port: 8080')
})


// const http = require('http')

// const server = http.createServer((req, res) => {
//     log("incoming request...")
//     res.writeHead(200, {"content-type":"text/html"})
//     res.end("<h2>I am server!</h2>")
//     log(req.method)
// })

// log('starting server')
// server.listen(8000)
