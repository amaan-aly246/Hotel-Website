import Users from "../models/users.js"
import bcrypt from 'bcrypt';
import jwt, { decode } from 'jsonwebtoken';
import { config } from "dotenv";
config();
const saltRound = 10;
const register = async (req, res) => {
    try {
        const email = await Users.findOne({ email: req.body.email });
        if (email) {
            return res.sendStatus(409) // user already exist
        }
        const salt = bcrypt.genSaltSync(saltRound);
        const password = bcrypt.hashSync(req.body.password, salt);
        const userData = {
            "username": req.body.username,
            "email": req.body.email,
            "password": password
        }
        await Users.create(userData)
        return res.sendStatus(201).json({ message: `user is created successfully ` });
    } catch (error) {
        console.log(error?.message);

    }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await Users.findOne({ email });

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
                { email: foundUser.email }, // filter 
                { refreshToken: refreshToken }, // update
                { new: true } // return updated value
            )
            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 100 }) // 1 day in milliseconds 
            res.json({ 'accessToken': accessToken, 'username ': foundUser.username , 'email': foundUser.email });
        }
        else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.log(error?.message)
    }
}
const logout = async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(204); // success but no content to send
        const refreshToken = cookies.jwt;

        // is refreshToken present in db
        const foundUser = await Users.findOne({ refreshToken });
        if (!foundUser) {
            res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            return res.sendStatus(204);
        }

        // Delete the refreshToken from the db
        await Users.findOneAndUpdate({ refreshToken: ' ' });
        res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.sendStatus(204)
    } catch (error) {
        console.log(error?.message);
        res.sendStatus(500);
    }
}

const refreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.status(401).send("Unauthorized");

    const refreshToken = cookies.jwt;

    try {
        const foundUser = await Users.findOne({ refreshToken });

        if (!foundUser) return res.sendStatus(403); // forbidden

        // evaluate jwt
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
                // jwt verification done, now issue new access_token
                const accessToken = jwt.sign(
                    { "username": decoded.username },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '30s' }
                );
                res.json({ accessToken });

            }
        );
    } catch (error) {
        console.log(error?.message);
        res.sendStatus(500);
    }
};
export {
    register,
    login,
    logout,
    refreshToken
}