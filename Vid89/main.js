const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

app.use('/blog', blog)
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("Hey it's a get request")
    res.send('Hello World2!')
}).post('/', (req, res) => {
    console.log("Hey it's a post request")
    res.send('Got a POST request')
}).put('/', (req, res) => {
    console.log("hey it's a put request")
    res.send('Got a PUT request at /')
})

app.get("/index", (req, res) => {
    console.log("Hey it's index")
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get("/api", (req, res) => {
    res.json({a: 1, b: 2, c: 3, name: ["Harry", "Krish", "Ron"]})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})