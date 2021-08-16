const { Router } = require("express");

const router = Router();
const registerRoute = require('./register')
const loginRoute = require('./login')

//CHECK IF THE USER IS LOGIN 
router.get('/', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

router.use('/register', registerRoute)
router.use('/login', loginRoute)

module.exports = router;