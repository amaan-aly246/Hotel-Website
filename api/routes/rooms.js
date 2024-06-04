import { Router } from 'express'
const router = Router()
import { getAllRooms, getSpecificRoom , createRoom, deleteRoom, deleteAllRoom} from '../controllers/rooms.js'

router.route('/all').get(getAllRooms).post(createRoom)
router.route('/').get(getSpecificRoom).delete(deleteRoom)
router.route('/delete-all').delete(deleteAllRoom)

export default router 