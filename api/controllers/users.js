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

const logout = async (req, res) => {
    return res.send("logout ");
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
            res.json({ 'accessToken': accessToken });
        }
        else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.log(error?.message)
    }
}
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find({});
        if (allUsers.length > 0) {
            return res.status(200).send(allUsers);
        }
        return res.status(204).json({ message: "No users to fetch" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await Users.findOneAndDelete({ _d: req.body.userId })
        if (user) {
            return res.status(200).send("User deleted successfully");
        }
        return res.status(404).send(`No user with id ${req.body.userId}`);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Server error" });
    }

}

const deleteAllUsers = async (req, res) => {
    try {
        const count = await Users.deleteMany({});

        if (count.deletedCount > 0) {
            return res.status(200).json({ message: ` ${count.deletedCount}  users deleted!` })
        }
        return res.status(204).json({ message: "No users to delete " });
    } catch (error) {
        console.log(error.message);
    }
}


export {
    getAllUsers,
    deleteAllUsers,
    deleteUser,
    signup,
    login,
    logout
}
