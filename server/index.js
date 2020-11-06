const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = './data.json';
const fs = require('fs');
const path = require('path');
const moviesData = require(filePath);

app.prepare().then(() => {

    const server = express();
    server.use(bodyParser.json());
    server.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
    server.get('/api/v1/movies', (req, res) => {
        return res.json(moviesData);
    });

    server.get('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;

        const movie = moviesData.find(m => m.id === id);

        return res.json(movie);

    });

    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body;
        moviesData.push(movie);
        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(moviesData, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err);
            }

            return res.json('Movie has been successfully added!');
        })
    });

    server.delete('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        const movieIndex = moviesData.findIndex(m => m.id === id);

        moviesData.splice(movieIndex, 1)

        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(moviesData, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err);
            }

            return res.json('Movie has been successfully deleted!');
        })
    });

    server.patch('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params;
        const movie = req.body;
        const movieIndex = moviesData.findIndex(m => m.id === id);

        moviesData[movieIndex] = movie;

        const pathToFile = path.join(__dirname, filePath);
        const stringifiedData = JSON.stringify(moviesData, null, 2);

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err);
            }

            return res.json(movie);
        })
    });
    server.post('*', (req, res) => {
        return handle(req, res);
    })

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on port ' + PORT);
    })
})