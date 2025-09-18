import express from 'express';
import dotenv from 'dotenv' ; 
import cors from 'cors';
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
app.get("/"  , (req,res) =>{
    res.send("Hello world");
})

app.listen(PORT , () => {
    console.log("Hello world" , PORT);
})