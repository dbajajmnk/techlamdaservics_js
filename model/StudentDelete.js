import { Student } from "./Student.js";





const deleteStudentById = async ()=>{
    const result = await Student.findByIdAndDelete("63aa3ca1003a1ee98f595d03")
    console.log(result);
}

const deleteStudentByAnyField = async()=> {
    const result = await Student.deleteOne({age:100});
    console.log(result);
}

const deleteManyByAnyField = async()=> {
    const result = await Student.deleteMany({name:"Deepak"});
    console.log(result);
}
export  {deleteStudentById,deleteStudentByAnyField,deleteManyByAnyField};
