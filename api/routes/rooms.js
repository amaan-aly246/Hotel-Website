import { Router } from 'express'
const router = Router()
import { getAllRooms, getSpecificRoom, createRoom, deleteRoom, deleteAllRoom } from '../controllers/rooms.js'
router.route('/rooms/all').get( getAllRooms).post(createRoom)
router.route('/rooms').get(getSpecificRoom).delete(deleteRoom)
router.route('/rooms/delete-all').delete(deleteAllRoom)

export default router 