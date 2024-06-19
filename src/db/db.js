import { connect } from "mongoose";

connect("mongodb+srv://AbhiCode04:abhinav05@mygear.m3szxsz.mongodb.net/QSIS?retryWrites=true&w=majority&appName=myGear")
.then(()=>console.log("Mongodb Connected"))
.catch((err)=>console.log("Error connecting to Mongodb",err))