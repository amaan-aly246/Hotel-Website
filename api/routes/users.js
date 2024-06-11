import { Router } from "express";
const router = Router();

import {
    getAllUsers,
    deleteAllUsers,
    deleteUser,
    signup,
    login
} from "../controllers/users.js";

router.route('/login').get(login)
router.route('/signup').post(signup);
router.route('/all-users').get(getAllUsers).delete(deleteAllUsers);
router.route('/user').delete(deleteUser);

export default router 