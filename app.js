import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './db/dbConnect.js'
import studentRouter from './routers/studentRouter.js'

import {getAllStudents,limitTheRecords, getAllStudentsBySpecificFields,findDocById,findDocSpecificFieldsById,findDocByField, skipTheRecords, getDocumentCount, sortTheDocs, comparisonOperator, logicalOperators} from './model/Student.js'
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT 
const DATABASE_URL = process.env.DATA_BASE_URL || "";
dbConnect(DATABASE_URL)  
//findDocSpecificFieldsById();
//findDocByField();
//createStudent();
//createMultiplyValues();
//getAllStudents();
//getAllStudentsBySpecificFields();
//limitTheRecords();
//skipTheRecords();
//getDocumentCount();
//sortTheDocs();
//comparisonOperator();
logicalOperators();
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Friends");
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})



