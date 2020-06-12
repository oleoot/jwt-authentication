const express = require('express');
const jwt = require('jsonwebtoken');


const app = express()


app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the API"
    })
})

app.post('/api/posts', (req, res) => {
    res.json({
        message: "Post created"
    })
})

app.post('/api/login', (req, res) => {
    // User
    const user = {
        id: 1,
        username: 'oleg',
        email: 'oleg@gmail.com'
    }
    jwt.sign({
        user: user
    }, 'secretkey', (error, token) => {
        res.json({
            token
        })
    })
})


app.listen(5000, () => console.log("Server startet at 5000"))
