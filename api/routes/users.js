import { Router } from "express";
const router = Router();
import {
    getAllUsers,
    deleteAllUsers,
    deleteUser,

} from "../controllers/users.js";
import verifyJWT from '../middleware/verifyJWT.js'

router.route('/all-users').get(getAllUsers).delete(deleteAllUsers);
router.route('/user').delete(deleteUser);

export default router 