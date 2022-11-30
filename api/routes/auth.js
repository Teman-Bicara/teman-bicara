/* eslint-disable no-underscore-dangle */
const router = require('express').Router();

const bcrpyt = require('bcrypt');
const User = require('../models/User');
// REGISTER
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrpyt.genSalt(10);
    const hashedPass = await bcrpyt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // eslint-disable-next-line no-unused-expressions
    !user && res.status(400).json('wrong credentials');

    const validated = await bcrpyt.compare(req.body.password, user.password);
    // eslint-disable-next-line no-unused-expressions
    !validated && res.status(400).json('wrong credentials');

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
