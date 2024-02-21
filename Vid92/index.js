const express = require('express')
const app = express()
const port = 3000

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now";
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when";
    let blockContent = "It's a very good brand";
    res.sendFile('templates/blogpost.html', {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})