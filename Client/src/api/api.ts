import axios from 'axios';


const api = axios.create({
    baseURL : "http://localhost:8000" , 
});


export type Task = {
    _id:string,
    title:string,
    description:string,
    status:"todo" | "in-progress" | "done";
    createdAt: string,
    updatedAt : string,
}


export const getTasks = async() : Promise<Task[]> =>{
    const res = await api.get("/tasks");
    return res.data;
}

export const createTask = async(task: Partial<Task>): Promise<Task> =>{
    const res = await  api.post("/tasks" , task);
    return res.data;
}

export const updateTask = async (id: string, updates: Partial<Task>): Promise<Task> => {
  const res = await api.put(`/tasks/${id}`, updates);
  return res.data;
};


export const deleteTask = async(id:string):Promise<{message:string}> =>{
    const res = await api.delete('/tasks/${id}');
    return res.data;
}