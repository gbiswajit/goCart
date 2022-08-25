const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js")
//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
})

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(
            {
                username: req.body.username
            }
        );

        if (!user) {
            res.status(401).json("Wrong User Name")
            return
        };
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;

        if (originalPassword != inputPassword) {
            res.status(401).json("Wrong Password");
            return
        }
        const { password, ...others } = user._doc;
        res.status(500).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;