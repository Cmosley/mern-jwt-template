const User = require('../models/user');
const jwt = require('jsonwebtoken')

module.exports = {
  signup
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user)
    res.json({ token });
  } catch (err) {
    res.status(400).send({'err': err.errmsg});
  }
}

/*  Helper functions  */

function createJWT(user) {
  return jwt.sign(
    { user }, //data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  )
}