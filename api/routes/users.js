import { Router } from "express";
const router = Router();
import {
    getAllUsers,
    deleteAllUsers,
    deleteUser,
    signup,
    login,
    logout
} from "../controllers/users.js";
import verifyJWT from '../middleware/verifyJWT.js'

router.route('/logout').get(logout);
router.route('/login').get(login)
router.route('/signup').post(signup);
router.route('/all-users').get(verifyJWT,getAllUsers).delete(deleteAllUsers);
router.route('/user').delete(deleteUser);

export default router 