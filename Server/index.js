import express from 'express';
import dotenv from 'dotenv' ; 
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/"  , (req,res) =>{
    res.send("Hello world");
})

app.listen(PORT , () => {
    console.log("Hello world")
})