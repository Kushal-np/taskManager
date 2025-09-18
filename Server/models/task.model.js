import mongoose from 'mongoose'


const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required'],

    },
    description:{
        type:String,
        default:'',
    },
    status:{
        type:String,
        enum:['todo','in-progress' , 'done'],
        default:'todo' , 
    },

}
,
{timestamps:true}
);


export const Task = mongoose.model("Task" , taskSchema);