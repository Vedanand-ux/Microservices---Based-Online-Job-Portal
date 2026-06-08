import express from 'express';
import dotenv from 'dotenv';
import routes from './routes.js';

dotenv.config();

const app = express();

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));

app.use("/api/utils",routes);

app.listen(process.env.PORT,()=>{
  console.log(`Utils service is running on http://localhost:${process.env.PORT}`);
})