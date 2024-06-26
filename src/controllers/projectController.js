import Project from "../models/projectSchema.js";

const fetchProject = async (req, res) => {
    try {
        const projectData = await Project.find({})
        res.status(200).json(projectData)
        // console.log(projectData);
    }
    catch (error) {
        console.error('Error fetching Projects: ', error)
        res.status(500).json({ error: 'Internal server error', error });
    }
}

const createProject = async (req, res) => {
    try {
        const newProjectData = req.body
        const newProjectobject = new Project({ ...newProjectData })
        const saveProject = await newProjectobject.save()
        res.status(201).json({ message: "Success", saveProject })
    }
    catch (error) {
        console.error('Error creating new Project: ', error)
        if (error.code === 11000) {
            return res.status(409).json({ error: 'Duplicate key error', details: 'Project already exists' });
        }
    }
}

const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id
        // console.log(projectId);
        const projectUpdate = await Project.findByIdAndUpdate({ _id: projectId }, req.body, { new: true, upsert: true })
        res.status(201).json({ message: "Project updated Successfully", projectUpdate })
    } catch (error) {
        console.error('Error updating Project: ', error)
        res.status(409).json({error});
    }
}

const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Project deleted successfully", deletedProject })
    } catch (error) {
        console.error('Error deleting Project: ', error)
        res.status(409).json({error});
    }
}

export { fetchProject, createProject, updateProject, deleteProject }