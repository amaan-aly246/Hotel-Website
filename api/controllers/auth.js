import Users from "../models/users.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config();
const saltRound = 10;
const signup = async (req, res) => {
    try {
        const mail = await Users.findOne({ mail: req.body.mail });
        if (mail) {
            return res.status(400).send("user already exists ");
        }
        const salt = bcrypt.genSaltSync(saltRound);
        const password = bcrypt.hashSync(req.body.password, salt);
        const userData = {
            "username": req.body.username,
            "mail": req.body.mail,
            "password": password
        }
        await Users.create(userData)
        return res.status(201).json({ message: `user is created successfully ` });
    } catch (error) {
        console.log(error?.message);

    }

}
const login = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const foundUser = await Users.findOne({ mail });

        if (!foundUser) return res.sendStatus(401) // unauthorized

        // evaluate password

        const match = await bcrypt.compareSync(password, foundUser.password);
        if (match) {
            // create jwt token
            const accessToken = jwt.sign(
                { "username": foundUser.username }, // payload
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            )
            const refreshToken = jwt.sign(
                { "username": foundUser.username }, // payload
                process.env.REFRESH_TOKEN_SECRET, // secret 
                { expiresIn: '1d' } // expire date
            );
            await Users.findOneAndUpdate(
                { mail: foundUser.mail }, // filter 
                { refreshToken: refreshToken }, // update
                { new: true } // return updated value
            )
            res.cookie('refresh token', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 100 }) // 1 day in milliseconds 
            res.json({ 'accessToken': accessToken, 'username ': foundUser.username });
        }
        else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.log(error?.message)
    }
}
const logout = async (req, res) => {
    return res.send("logout ");
}

export {
    signup,
    login,
    logout
}