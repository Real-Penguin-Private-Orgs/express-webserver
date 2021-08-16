/* eslint-disable no-unused-vars */
const { Router } = require("express");
const db = require('../../utils/database')
const bcrypt = require('bcrypt')
const router = Router();

router.post('/', (req, res) => {
    let saltRounds = 15;
    let { username, email, password } = req.body;
    let query = `
        INSERT INTO users (username, email, password) VALUES (?,?,?)
    `

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            db.query(query, [username, email, hash], (err, results) => {
                if(err) throw err;
            })
        })
    })
})

module.exports = router;