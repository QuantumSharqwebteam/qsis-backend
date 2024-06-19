import express from 'express'
import { createProject, deleteProject, fetchProject, updateProject } from '../controllers/projectController.js'

const projectRouter = express.Router();

projectRouter.get("/", fetchProject);
projectRouter.post("/", createProject);
projectRouter.patch("/:id",updateProject);
projectRouter.delete("/:id", deleteProject)

export default projectRouter