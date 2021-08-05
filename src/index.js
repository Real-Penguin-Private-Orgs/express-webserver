require('dotenv').config();
const app = require("./app");
const logger = require('./utils/logger');

let port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if(err) throw err;
    logger.info(`Listening to http://localhost:${port}`);
})