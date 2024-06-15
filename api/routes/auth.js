import { Router } from "express";
const router = Router();
import {
    register,
    login,
    logout,
    refreshToken
} from "../controllers/auth.js";


router.route('/logout').get(logout);
router.route('/login').post(login)
router.route('/register').post(register);
router.route('/refresh').get(refreshToken);

export default router 