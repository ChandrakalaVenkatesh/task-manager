//const  createTask=(req,res)=>{
    //res.send("create task")
   // res.render("home")
//}
// const postTask=(req,res)=>{
//     res.send("post task")
// }


// module.exports={
//     createTask,
//     postTask
// }
const Task=require("../models/task")
const getTasks=async (req,res)=>{
    try{
        let tasks=await Task.find().lean()
        res.status(200).render("home",{tasks})
    }
    catch(error){
        res.status(404).json({message:"no task added"})
    }
    //res.render("home")
}
const postTask=async (req,res)=>{
    try{
        let {task}=req.body
    // console.log(req.body)
        await Task.create({task:task})
        res.redirect("/task-manager/task")
    }catch (error){
console.log(error)
    }
}
const getTask=async (req,res)=>{
    try{
        let id=req.params.id
        let task=await Task.findOne({_id:id}).lean()
        // console.log(tasks)
        res.status(200).render("update",{task})
    }
    catch(error){
        res.status(404).json({message:"no task added"})
    }
}
const updateTask = async (req,res)=>{
    try{
        const id = req.params.id
        const updateTask = req.body.task
        await Task.updateOne({_id:id},{$set:{task:updateTask}})
        res.status(200).redirect("/task-manager/task")
    }catch(error){
        console.log(error);
    }
}
const deleteTask = async (req,res)=>{
    try{
        const id = req.params.id
        await Task.deleteOne({_id:id})
        res.status(200).redirect("/task-manager/task")
    }catch(error){
        console.log(error);
    }
}



module.exports={
    getTask,
    postTask,
    getTasks,
    updateTask,
    deleteTask
}