const userCollection = require("../../models/user/userModel");
const generateAccessToken = require("../../utils/generateAccessToken");

const hashPassword = require("../../utils/hashPassword");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Check for user data
        if (!name || !email || !password) return res.status(400).send({ status: "error", message: "Invalid user data" });

        //Check for user existence
        const isUserExist = await userCollection.findOne({ email });
        if (isUserExist) return res.status(409).send({ status: "error", message: "User already exist" });

        //Save user registration
        const user = {
            name,
            email,
            passwordHash: await hashPassword(password),
            accessToken: generateAccessToken(email)
        }

        const newUser = userCollection(user);
        await newUser.save();

        res.status(201).send({ message: "success", accessToken: user.accessToken });

    }
    catch (error) {
        if (error) {
            console.log(error);
            res.status(500).send({
                status: "error",
                message: "Internal server error!"
            })
        }
    }
}


module.exports = registerUser;