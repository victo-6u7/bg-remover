import 'dotenv/config'
import cors from 'cors'
import express, { json } from 'express'
import connectDB from './Configs/mongodb.js'
import userRouter from './Routes/UserRoutes.js'

//app config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

app.use(express.json())
app.use(cors())

app.get('/',(req,res) =>res.send("API Working"))
app.use('/api/user',userRouter)
app.listen(PORT,()=>console.log("Server running on port" +PORT))