const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const connect = require("./connection");


const indexRouter = require("./routes/index");

// Using .env file variables
dotenv.config();

// Connect MongoDB Database
connect(process.env.CONNECTION_URL);

// Create App
const PORT = process.env.PORT;
const app = express();

// Set ejs view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Third-Party Middlewares
app.use(logger('dev'));


// Built-In Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// Routing Middlewares
app.use('/', indexRouter);


// Error handler Middlewares

// 404 Error Handler
app.use((req, res, next) => {
    res.status(404).send('Page Not found!');
});

// 500 Errors Handler
app.use((error, req, res, next) => {
    res.status(500).send(error);
});

// Listen App on PORT
app.listen(PORT, () => {
    console.log(`Server listen on PORT ${PORT}`);
});