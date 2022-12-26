import {Router} from 'express';
import studentController from '../controllers/studentController.js'

const studentRouter = Router()
studentRouter.get("/",studentController);

export default studentRouter;