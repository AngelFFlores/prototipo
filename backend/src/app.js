import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import authRoutes from './routes/auth.routes.js'
import { FRONTEND_URL } from './config.js'

const app = express()
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use("/api", authRoutes)

// Sirve archivos estáticos desde el directorio 'client/build'
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../client/build')))

// Redirige todas las rutas a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
})

export default app