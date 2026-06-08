import express from 'express';
import dotenv from 'dotenv';
import router from './routes.js';

dotenv.config();

const app = express();

app.use("/api/utils",router);

app.listen(process.env.PORT,()=>{
  console.log(`Utils service is running on http://localhost:${process.env.PORT}`);
})