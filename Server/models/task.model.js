import {v4 as uuidv4} from 'uuid';

let tasks = ["kushal"];

export function getAllTasks(){
    return tasks;
}

export function createTask({title,description = '' , status='todo'}){
    const newTask ={
        id:uuidv4(),
        title,
        description,
        status,
        createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
}

export function updateTask(id,updates){
    let found = false , 
    tasks = tasks.map(t => {
        if(t.id === id ){
            found = true;
            return {
                ...t , 
                ...updates
            }
        }
        return t ; 
    });
    return found ; 
}

export function deleteTask(id){
    const before = tasks.length;
    tasks = tasks.filter(t=>t.id !== id);
    return tasks.length < before ;
}