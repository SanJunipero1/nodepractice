import express, { urlencoded } from "express";
import { UserRouter } from "./routing/routing.js";
import cors from 'cors'
const corsuse = cors()


const app = express()
app.use(corsuse)
app.use(express.json({urlencoded:true}))
app.use("/users",UserRouter)

app.listen(3200,()=> console.log("port ist 3200"))