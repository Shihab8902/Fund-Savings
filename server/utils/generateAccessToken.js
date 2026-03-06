const jwt = require('jsonwebtoken');

const generateAccessToken = (email) => {
    const token = jwt.sign({ email }, process.env.JWT_SIGN, { expiresIn: '30d' })
    return token;
}


module.exports = generateAccessToken;