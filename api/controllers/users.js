import Users from "../models/users.js"
import bcrypt from 'bcrypt';

const saltRound = 10;
const userSignUp = async (req, res) => {
    try {

        const mail = await Users.findOne({ mail: req.body.mail });
        if (mail) {
            res.status(400).send("user already exists ");
        }
        const salt = bcrypt.genSaltSync(saltRound);
        const password = bcrypt.hashSync(req.body.password, salt);
        const userData = {
            "username": req.body.username,
            "mail": req.body.mail,
            "password": password
        }
        await Users.create(userData)
        res.status(201).json({ message: `${userData} is created successfully ` });


    } catch (error) {

    }

}

export {
    userSignUp
}
