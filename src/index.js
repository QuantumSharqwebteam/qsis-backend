import express from 'express'
import cors from 'cors'
import './db/db.js'
import projectRouter from './routes/projectRoute.js'
import careerRouter from "./routes/CareerRoute.js"


const app = express()
app.use(cors())
app.use(express.json())

app.use("/projects", projectRouter)

app.use("/career", careerRouter)


const port = process.env.port || 5000

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})