import { Router } from "express";
const router = Router();

import { userSignUp } from "../controllers/users.js";


router.route('/signup').post(userSignUp);
export default router 