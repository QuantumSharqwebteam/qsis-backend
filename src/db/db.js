// import { connect } from "mongoose";
// const mongoose = require('mongoose');
import {mongoose, connect } from "mongoose"

const uri = "mongodb+srv://QSIS:AGQHrh2qgQY4bmca@qsis.ufyx0wp.mongodb.net/QSIS?retryWrites=true&w=majority&appName=qsis"
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB Atlas');
  
});