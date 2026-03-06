const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (plainPassword) => {
    try {
        const hash = await bcrypt.hash(plainPassword, saltRounds);
        return hash;
    } catch (err) {
        console.log("error during hashing password", err);
        throw err;
    }
};


module.exports = hashPassword;