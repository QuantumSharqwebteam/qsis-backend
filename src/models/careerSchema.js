import mongoose from "mongoose"

const careerSchema = new mongoose.Schema({
    role : {
        type : String,
        required : false
    },
    requirements : {
        type : [String],
        required : false
    },
    experience : {
        type : String,
        required : false
    },
    salary : {
        type :String,
        required : false
    }

})

const Career = mongoose.model("Career", careerSchema);

export default Career;