import express from "express"
import connectDB from "./database/connect.js";
import { config } from 'dotenv';
import rooms from "./routes/rooms.js";
config()
const app = express();
const port = process.env.PORT 

// middleware 
app.use(express.json())


//Routes 
app.use('/rooms' , rooms);

const start = async () => {
    try {
        await connectDB(process.env.connectionString);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.log('error', error.message);
    }
}

start();


