import { Student } from "./Student.js";





const updateStudentById = async ()=>{
    const result = await Student.findByIdAndUpdate("63aa3ca1003a1ee98f595d03",{name:"Navneet Kour"},{returnDocument:"after"})
    console.log(result);
}

const updateByAnyField = async()=> {
    const result = await Student.updateOne({age:39},{age:100},{returnDocument:'after'});
    console.log(result);
}

const updateManyByAnyField = async()=> {
    const result = await Student.updateMany({age:39},{age:100},{returnDocument:'after'});
    console.log(result);
}
export  {updateStudentById,updateByAnyField,updateManyByAnyField};
