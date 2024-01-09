import express from 'express'
import cors from "cors";
import 'dotenv/config'
import { carRoute } from './src/Routes/CarRoutes.js';
import mongoose from 'mongoose';
const app = express()
app.use(cors())
app.use(express.json())


app.use("/",carRoute) 


mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})