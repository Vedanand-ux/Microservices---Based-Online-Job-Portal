import express from 'express';
import dotenv from 'dotenv';
import routes from './routes.js';
import cors from 'cors';
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: "dwxvgplcu",
    api_key: "154711964926888",
    api_secret: "Rj37zKjqlQHy5Tx9Q09RVv8xoFY",
});

const app = express();
app.use(cors());

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));

app.use("/api/utils",routes);

app.listen(process.env.PORT,()=>{
  console.log(`Utils service is running on http://localhost:${process.env.PORT}`);
})