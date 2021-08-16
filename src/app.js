require('dotenv').config();
const express = require("express");
const helmet = require("helmet");
const { NotFound, errorHandler } = require("./utils/middlewares");
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const fileUpload = require('express-fileupload')

const corsOptions = {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
}))

app.use(fileUpload({
    debug: true
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🍕'
    })
})

require('./routes/index')(app);

app.use(errorHandler)
app.use(NotFound);

module.exports = app;