import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        trim: true
    },
    email: {
        type: String,
        require: true,
        min: 8,
    },
    password: {
        type: String,
        require: true,
        min: 3
    },
    refreshToken: {
        type: String,
        default : ''
    }
})

export default mongoose.model("Users", userSchema);