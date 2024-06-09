import Rooms from '../models/rooms.js'

const createRoom = async (req, res) => {
    try {
        const room = await Rooms.create(req.body);
        res.status(201).send({ data: room })
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(400).send({ error: error.message });
        }
        else {
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }
}

const getSpecificRoom = async (req, res) => {

    try {
        const { roomId } = req.query;
        if (roomId) {
            const room = await Rooms.find({ _id : roomId});
            if (room.length > 0)
                return res.status(200).json({ room });
            res.status(404).send({ message: "Wrong roomId" })

        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

const getAllRooms = async (req, res) => {
    try {
        const room = await Rooms.find({});
        if (room.length > 0) {
            return res.status(200).json({ room });

        }
        return res.status(404).send("No rooms")

    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

const deleteRoom = async (req, res) => {
    try {
        const { roomId } = req.query
        const room = await Rooms.findOneAndDelete({ _id: roomId });
        if (!room) {
            return res.status(404).json({ msg: `No room with id:${roomId}` })
        }
        res.status(200).send(`room with id:${roomId} deleted`)


    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const deleteAllRoom = async (req, res) => {
    try {
        const result = await Rooms.deleteMany({});
        if (result.deletedCount > 0) {
            return res.sendStatus(200).send(`${result.deletedCount} rooms deleted`)

        }
        res.sendStatus(200).send("Nothing to delete ")
    } catch (error) {
        res.status(500).json({ msg: error });

    }
}

export {
    createRoom,
    getAllRooms,
    getSpecificRoom,
    deleteRoom,
    deleteAllRoom
}