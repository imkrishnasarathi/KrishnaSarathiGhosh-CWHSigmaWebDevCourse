const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("Hey it's a get request")
    res.send('Hello World2!')
})

app.post('/', (req, res) => {
    console.log("Hey it's a post request")
    res.send('Got a POST request')
})

app.put('/', (req, res) => {
    console.log("hey it's a put request")
    res.send('Got a PUT request at /')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})