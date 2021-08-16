/* eslint-disable no-unused-vars */
const { Router } = require("express");
const db = require('../../utils/database')
const router = Router();


router.post("/", (req, res) =>{
    let { title, description, url } = req.body;
    let thumbnail = req.files.picture;

    let query = `
        INSERT INTO base(title, description, url, picture)
        VALUES (?, ?, ?, ?)
    `
    db.query(query, [title, description, url, thumbnail.name], (err, results) => {
        if(err) throw err;
    })
})

module.exports = router;