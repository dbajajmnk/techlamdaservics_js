import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './db/dbConnect.js'
import studentRouter from './routers/studentRouter.js'
import { deleteManyByAnyField,deleteStudentById,deleteStudentByAnyField} from './model/StudentDelete.js';
dotenv.config();
const PORT = process.env.PORT 
const DATABASE_URL = process.env.DATA_BASE_URL || "";
dbConnect(DATABASE_URL)  
//deleteStudentById();
//deleteManyByAnyField();
deleteStudentByAnyField();



const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Friends");
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})



