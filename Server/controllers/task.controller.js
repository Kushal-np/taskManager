import { createTask, deleteTask, updateTask } from "../models/task.model.js";

export const addtask = async(req , res) =>{
    const{title , description , status} = req.body;
    if(!title) {
        return res.status(400).json({
            error:"title is required"
        })
    }
    const task = createTask({title , description , status})
    return res.status(501).json({
        task
    })
}

export const editTask = async(req,res) =>{
    const id = req.params.id;
    const updates = req.body;

    const success = updateTask(id,updates) ;
    if(!success){
        return res.status(404).json({
            error:"Task not found"
        })
    }
    res.json({
        message:"Task updated" 
    })
}


export const removeTask = async(req,res) =>{
    const id = req.params.id; 
    const success = deleteTask(id);
    if(!success){
        return res.status(404).json({
            error:"Task not found "
        });
    }
    res.json({
        message:"Task deleted"
    })
}