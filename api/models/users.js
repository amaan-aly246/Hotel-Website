import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        trim: true
    },
    mail: {
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
        type: String
    }
})

export default mongoose.model("Users", userSchema);