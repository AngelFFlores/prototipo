import app from './app.js'
import { connectDB } from './db.js'
const port = 9000

connectDB()
app.listen(port, () => {
  console.log("esta corriendo el servidor")
})