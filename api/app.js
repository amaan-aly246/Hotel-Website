import express from "express"
import cors from 'cors'
import connectDB from "./database/connect.js";
import { config } from 'dotenv';
import rooms from "./routes/rooms.js";
import users from "./routes/users.js"
import auth from './routes/auth.js'
config() // load environment variables

const app = express();
const port = process.env.PORT
import { allowedOrigins } from "./config/allowedOrigins.js";
// middleware 
app.use(express.json())
app.use(cors({
    credentials: true, origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}));



//Routes 

app.use('/api', rooms);
app.use('/api', users);
app.use('/api', auth);


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


