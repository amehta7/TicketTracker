const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

dotenv.config()

//connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Ticket Tracker API' })
})

//routes
app.use('/api/users', userRouter)

//middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
