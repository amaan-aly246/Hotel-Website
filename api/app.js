import express from "express"
import cors from 'cors'
import connectDB from "./database/connect.js";
import cookieParser from "cookie-parser";
import { config } from 'dotenv';
import rooms from "./routes/rooms.js";
import users from "./routes/users.js"
import auth from './routes/auth.js'
config() // load environment variables

const app = express();
const port = process.env.PORT
import { allowedOrigins } from "./config/allowedOrigins.js";
// build-in middleware for json 
app.use(express.json())
// cores middleware
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
// cookie-parser middleware 
app.use(cookieParser());



//Routes 
app.use('/api', auth);
app.use('/api', rooms);
app.use('/api', users);


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


