const express=require("express")
let route=express.Router()
const {getTask,postTask,getTasks,updateTask,deleteTask}=require("../controllers/taskcontroller")

//route to get one task to update 
route.get("/task/:id",getTask)
//route to post task
route.post("/task",postTask)
//to create task
route.get("/task",getTasks)
//to update one task
route.put("/task/:id",updateTask)
//to delete one task
route.delete("/task/:id",deleteTask)
module.exports=route;