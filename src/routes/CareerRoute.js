import express from "express"
import { CreateCareer, FetchCareer, FetchOnecareer, UpdateCareer, deleteCareer } from "../controllers/careerController.js"


const careerRouter = express.Router()

careerRouter.post('/', CreateCareer)
careerRouter.get('/', FetchCareer)
careerRouter.get('/:id', FetchOnecareer)
careerRouter.put('/:id', UpdateCareer)
careerRouter.delete('/:id', deleteCareer)

export default careerRouter;