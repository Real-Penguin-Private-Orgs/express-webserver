const { Router } = require("express");

const router = Router();

router.get("/:id", (req, res) => {
    let { id } = req.params;
    res.json({
        message: id,
        statusCode: 200
    })
})

module.exports = router;