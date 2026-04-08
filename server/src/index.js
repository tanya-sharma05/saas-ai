import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import {clerkMiddleware, requireAuth} from "@clerk/express";
import aiRouter from './routes/ai.routes.js';
import connectCloudinary from './config/cloudinary.js';

const app= express();
const PORT= process.env.PORT || 3000;

await connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get('/', (req,res)=>{
    return res.send('Server is live...')
});

app.use(requireAuth());

app.use('/api/ai', aiRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
