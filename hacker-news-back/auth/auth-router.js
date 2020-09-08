
const Users = require('../users/users-model.js');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const restricted = require('./restricted-middleware.js')


router.get("/users", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => res.send(err));
});


router.post('/register', async (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    try {
        const saved = await Users.add(user)
        res.status(201).json(saved)

    } catch ( err ) {
        console.log(err);
        res.status(500).json(err)
    }
}
)

router.post('/login', async (req, res) => {
    let {username, password} = req.body

    try {
        const user = await Users.findBy({
            username
        }).first()
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user
            res.status(200).json({
                messsage: " enter "
            })
        } else {
            res.status(401).json({
                message: "oops! wrong creds "
            })
        }

    } catch ( err ) {
        console.log(err)

        res.status(500).json(err)

    }

})

router.post('/logout', async (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.send(' login error')
            } else {
                res.send(' you have been logged out')
            }
        })
    } else {
        res.end()

    }
})


module.exports = router