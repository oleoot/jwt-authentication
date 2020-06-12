const express = require('express');
const jwt = require('jsonwebtoken');


const app = express()


app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the API"
    })
})

app.post('/api/posts', verifyToken, (req, res) => {
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
// Token Format
// authorization : Bearer <access token>



// Verify Token func
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader == !undefined) {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from arr
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken
        // Call next
        next()
    } else {
        //Forbidden
        res.sendStatus(403)
    }
}


app.listen(5000, () => console.log("Server startet at 5000"))
