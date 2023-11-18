import { Router } from "express";
import todoController from "../src/todoController/index.js";
const router = Router();


router.get('/todo', todoController.getAll);
router.get('/todo/:id', todoController.getById);
router.post('/todo', todoController.addData);
router.put('/todo/:id', todoController.updateData);
router.delete('/todo/:id', todoController.deleteData);

export default router;