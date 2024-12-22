import dotenv from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dbConnect from './db/dbConnect.js';
import router from './routes/userRoutes.js';
const app = express();

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.send("Hello World!");
});
app.use('/users',router)

export default app;