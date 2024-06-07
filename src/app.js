import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.get('/', (req, res) => {
  const prueba =  "<p>funcionoo</p>"

  res.send(prueba)

})

export default app