import { connect } from "mongoose";


let mongodbURI = process.env.MONGO_URI

connect(mongodbURI)
.then(()=>console.log("Mongodb Connected"))
.catch((err)=>console.log("Error connecting to Mongodb",err))