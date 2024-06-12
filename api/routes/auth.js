import { Router } from "express";
const router = Router();
import {
    signup,
    login,
    logout,
    refreshToken
} from "../controllers/auth.js";


router.route('/logout').get(logout);
router.route('/login').get(login)
router.route('/signup').post(signup);
router.route('/refresh').get(refreshToken);

export default router 