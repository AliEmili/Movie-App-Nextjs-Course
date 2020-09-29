const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const moviesData = require('./data.json');

app.prepare().then(() => {

    const server = express();

    server.get('/api/v1/movies', (req,res)=> {
        return res.json(moviesData);
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    })

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on port ' + PORT);
    })
})