import express from 'express';
import {Router} from 'express';
import { addtask, editTask, getTask, removeTask } from '../controllers/task.controller.js';


const router = express.Router();

router.get("/" , getTask);
router.post("/" , addtask);
router.put("/:id" , editTask);
router.delete("/:id" , removeTask);

export default router; 
