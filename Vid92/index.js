const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.get('/', (req, res) => {
    let siteName = "Adidas";
    let searchText = "Search Now";
    let arr = [1,54,65];
    res.render('index', {siteName, searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when";
    let blockContent = "It's a very good brand";
    res.render('views/blogpost', {blogTitle, blockContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})