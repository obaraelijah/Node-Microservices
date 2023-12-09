const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = 3000


// Proxy routes to respective services

// http://127.0.0.1:3000/chat-service => http://127.0.0.1:3001/
app.use('/chat-service', createProxyMiddleware(
    {
        target: 'http://127.0.0.1:3001/',
        pathRewrite: {
            '^/chat-service': '', // rewrite path
        },
    }
));


// http://127.0.0.1:3000/feed-service => http://127.0.0.1:3002/
app.use('/feed-service', createProxyMiddleware(
    {
        target: 'http://127.0.0.1:3002/',
        pathRewrite: {
            '^/feed-service': '',
        },
    }
));

// http://127.0.0.1:3000/video-service => http://127.0.0.1:3003/
app.use('/video-service', createProxyMiddleware(
    {
        target: 'http://127.0.0.1:3003/',
        pathRewrite: {
            '^/video-service': '',
        },
    }
));

// http://127.0.0.1:3000/marketplace-service => http://127.0.0.1:3004/
app.use('/marketplace-service', createProxyMiddleware(
    {
        target: 'http://127.0.0.1:3004/',
        pathRewrite: {
            '^/marketplace-service': '', 
        },
    }
));

// http://127.0.0.1:3000/gaming-service => http://127.0.0.1:3005/
app.use('/gaming-service', createProxyMiddleware(
    {
        target: 'http://127.0.0.1:3005/',
        pathRewrite: {
            '^/gaming-service': '',
        },
    }
));

app.get('/', (req, res) => {
    res.send(`Hello, I am your API Gateway!`);
});

app.listen(port, () => {
    console.log(`API Gateway listening on port http://127.0.0.1:${port}/`);
});