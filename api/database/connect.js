import mongoose from 'mongoose';
const connectDB = async (connectionString) => {
    return mongoose.connect(connectionString, )

}


export default connectDB;
