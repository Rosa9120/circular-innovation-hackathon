import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'
import kpiRoutes from './routes/kpi.js'
import KPI from './models/KPI.js'
import { kpis } from './data/data.js'

// CONFIGS

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use('/kpi', kpiRoutes)

// MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
  })

  // await mongoose.connection.db.dropDatabase()
  // KPI.insertMany(kpis)
}).catch((error) => {
  console.log('Error connecting to MongoDB')
  console.log(error.message)
})