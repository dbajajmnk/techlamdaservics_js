import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {name:{type:String},
    age:{type:Number},email:{type:String},
    phoneNumber:{type:{type:Number, min:10,max:10}},
    address:{locality:{type:String},
    city:{type:String},state:{type:String},country:{type:String},
    pin:{type:Number}},
    posts:[{title:{type:String},description:{type:String},
        createdBy:{type:Date, default: Date.now}}],
        keywords:[String],
        comments:[{rating:{type:Number},title:{type:String},message:{type:String},givenDate:{type:Date,default:Date.now}}]
}
);
const Student = mongoose.model("student",studentSchema);

const createStudent = async ()=>
{
        try {
            const newStudent = new Student({name:"Deepak",
            age:39,
            email:"Deepak Bajaj",
            phoneNumber:9311616298,
            address:{locality:"Anant Raj Maceo,91",city:"Gurugram",state:"Haryana",country:"India",pin:122055},
            posts:[{title:"First Post",description:"Good Friends"}],
            keywords:["Java","Kotlin","Node Js"],
            comments:[{rating:5,title:"Good Teacher",message:"Good Student"}]});
            const result = await newStudent.save();
            console.log(result);
            
        } catch (error) {
            console.log(error);
            
        }

}

const createMultiplyValues = async ()=>
{
        try {
            const newStudent1 = new Student({name:"Deepak",
            age:39,
            email:"Aayu Bajaj",
            phoneNumber:9311616298,
            address:{locality:"Anant Raj Maceo,91",city:"Gurugram",state:"Haryana",country:"India",pin:122055},
            posts:[{title:"First Post",description:"Good Friends"}],
            keywords:["Java","Kotlin","Node Js"],
            comments:[{rating:5,title:"Good Teacher",message:"Good Student"}]});
            const newStudent2 = new Student({name:"Deepak",
            age:39,
            email:"Deepika Bajaj",
            phoneNumber:9311616298,
            address:{locality:"Anant Raj Maceo,91",city:"Gurugram",state:"Haryana",country:"India",pin:122055},
            posts:[{title:"First Post",description:"Good Friends"}],
            keywords:["Java","Kotlin","Node Js"],
            comments:[{rating:5,title:"Good Teacher",message:"Good Student"}]});

            const newStudent3 = new Student({name:"Deepak",
            age:39,
            email:"Navdeep Bajaj",
            phoneNumber:9311616298,
            address:{locality:"Anant Raj Maceo,91",city:"Gurugram",state:"Haryana",country:"India",pin:122055},
            posts:[{title:"First Post",description:"Good Friends"}],
            keywords:["Java","Kotlin","Node Js"],
            comments:[{rating:5,title:"Good Teacher",message:"Good Student"}]});
        
            const newStudent4 = new Student({name:"Deepak",
            age:39,
            email:"Pardeep Bajaj",
            phoneNumber:9311616298,
            address:{locality:"Anant Raj Maceo,91",city:"Gurugram",state:"Haryana",country:"India",pin:122055},
            posts:[{title:"First Post",description:"Good Friends"}],
            keywords:["Java","Kotlin","Node Js"],
            comments:[{rating:5,title:"Good Teacher",message:"Good Student"}]});
            
           const result = Student.insertMany([newStudent1,newStudent2,newStudent3,newStudent4]);  
            console.log(result);
            
        } catch (error) {
            console.log(error);
            
        }

}

const getAllStudents = async ()=>{
    try
    {
       const results = await Student.find();
       results.forEach((result)=>{
        console.log(result);
       })

    }
    catch(e)
    {
        console.log(e);
    }
   
}

/**
 * Get document for specific fields
 */
const getAllStudentsBySpecificFields = async ()=>{
    try
    {
        /**
         * First Way
         */
      // const results = await Student.find().select('name age');// Include
      //const results = await Student.find().select(['age','name']);// Include
      //const results = await Student.find().select({name:1,age:1});//Include
      /**
       * Exludes Fields from results
       */
      //const results = await Student.find().select('-name -age');// Exclude
     // const results = await Student.find().select(['-name','-age'])
      
   // const results = await Student.find().select({name:0,age:0})

   //Without Select
   //const results = await Student.find({},['name','age'])
   //const results = await Student.find({},('name age'))
   const results = await Student.find({},{name:1,age:1})




       results.forEach((result)=>{
        console.log(result);
       })

    }
    catch(e)
    {
        console.log(e);
    }
   
}


const findDocById = async()=>
{
    try
    {
        const result = await Student.findById("63aa3ca1003a1ee98f595d03")
    console.log(result);
    }
    catch(e)
    {
        console.log(e);
    }
    
}

const findDocSpecificFieldsById = async()=>
{
    try
    {
       // const result = await Student.findById("63aa3ca1003a1ee98f595d03",('name age'))
        //const result = await Student.findById("63aa3ca1003a1ee98f595d03",['name', 'age'])
        const result = await Student.findById("63aa3ca1003a1ee98f595d03",{name:1, age:1})
    console.log(result);
    }
    catch(e)
    {
        console.log(e);
    }
    
}

const findDocByField = async()=>
{
    try
    {
       // const result = await Student.findById("63aa3ca1003a1ee98f595d03",('name age'))
        //const result = await Student.findById("63aa3ca1003a1ee98f595d03",['name', 'age'])
        //const result = await Student.findOne({email:"Aayu Bajaj"})

        const result = await Student.find({age:39})
        

    console.log(result);
    }
    catch(e)
    {
        console.log(e);
    }
    
}

const limitTheRecords = async()=>{
       // const results = await Student.find().limit(4);
        const results = await Student.find({},null,{limit:4})
        console.log(results.length);
}

const skipTheRecords = async()=>{
    // const results = await Student.find().limit(4);
     const results = await Student.find({},null,{skip:4})
     console.log(results.length);
}

const getDocumentCount = async()=>{
    // const results = await Student.find().limit(4);
     const results = await Student.find().countDocuments();
     console.log(results);
}
/**Sorting */
const sortTheDocs = async()=>{
    // const results = await Student.find().limit(4);
     const results = await Student.find().sort({age:-1})
     console.log(results);
}

//Apply Comparison Operator

const comparisonOperator = async()=>{
    const results =  await Student.find({age:{$gt:38}},('name age'));
    console.log(results);
}

const logicalOperators = async()=>{
    const results = await Student.find({$and:[{name:"Deepak"},{email:"Pardeep Bajaj"}]});
    console.log(results);
}

export  {createStudent,createMultiplyValues, getAllStudents,getAllStudentsBySpecificFields,findDocById,findDocSpecificFieldsById,findDocByField,
    limitTheRecords,skipTheRecords,getDocumentCount,sortTheDocs,comparisonOperator,logicalOperators};

