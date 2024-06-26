import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectId: {
        type: String,
        unique: true,
    },
    projectName: {
        type: String,
        unique: true,
    },
    projectOverview: {
        type: String,
    },
    projectFeatures: [String],
    projectImpact:{
        type:String, 
    },
})

const Project  = mongoose.model('project', projectSchema);

export default Project