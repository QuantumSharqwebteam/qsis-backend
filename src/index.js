import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './db/db.js'
import projectRouter from './routes/projectRoute.js'
import careerRouter from "./routes/CareerRoute.js"
import userRouter from './routes/userRoute.js'


const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",userRouter)
app.use("/projects", projectRouter)
app.use("/career", careerRouter)



const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})