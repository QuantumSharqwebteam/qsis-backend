import { connect } from "mongoose";

connect("mongodb+srv://qsisvellore:qsismongodb@qsis.ndk49xu.mongodb.net/QSIS?retryWrites=true&w=majority&appName=QSIS")
.then(()=>console.log("Mongodb Connected"))
.catch((err)=>console.log("Error connecting to Mongodb",err))