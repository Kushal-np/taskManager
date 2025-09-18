import express from 'express';
import {Router} from 'express';
import { deleteTask, getAllTasks } from '../models/task.model.js';
import { addtask, editTask } from '../controllers/task.controller.js';


const router = express.Router();

router.get("/" , getAllTasks);
router.post("/" , addtask);
router.put("/:id" , editTask);
router.delete("/:id" , deleteTask);

export default router; 
