import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide room title'],
        trim: true,
        maxLength: 20,

        minLength: [3]
    },
    deal: {
        type: Number,
        required: false,
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'price not specified'],
    },
    capacity: {
        adult: {
            type: Number,
            required: true,
            default: 2

        },
        child: {
            type: Number,
            required: true,
            default: 1
        }
    },
    booked: {
        type: Boolean,
        required: true,
        default: false,
    },
    totalNoOfRooms: {
        type: Number,
        require: true,
        default: 3
        
    }
})

export default mongoose.model('Rooms', roomsSchema)
// 'rooms' is the name of the collection in the database 