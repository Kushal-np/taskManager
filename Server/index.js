import express from 'express';
import dotenv from 'dotenv' ; 
import cors from 'cors';
import taskRoutes from "./routes/task.route.js"
import { errorHandler } from './utils/errorHanlder.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use((err,req,res,next) =>{
    console.log(err) ; 
    res.status(500).json({
        error:"Something went wrong",
    })
})


app.use("/api/v1/tasks" ,taskRoutes )
app.use(errorHandler)

app.listen(PORT , () => {
    console.log("Hello world" , PORT);
})