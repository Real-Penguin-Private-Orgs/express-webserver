const { Router } = require("express");

const router = Router();
const addRoute = require('./add');

router.use('/add', addRoute);

module.exports = router;