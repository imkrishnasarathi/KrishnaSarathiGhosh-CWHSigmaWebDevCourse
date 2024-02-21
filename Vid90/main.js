const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blogs')
const fs = require('fs')


app.use('/blog', blog)

// app.use(express.static('public'))

app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    // res.send("Middleware 1")
    next()
})

app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am krishna bhai";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})