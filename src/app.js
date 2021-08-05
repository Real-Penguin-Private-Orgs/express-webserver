const express = require("express");
const helmet = require("helmet");
const { NotFound, errorHandler } = require("./utils/middlewares");
const app = express();

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World 🍕'
    })
})

require('./routes/index')(app);

app.use(errorHandler)
app.use(NotFound);

module.exports = app;