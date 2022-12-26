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

export  {createStudent,createMultiplyValues};

