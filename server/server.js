import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const corsOptions = {
  origin: ['http://localhost:5173']
}
const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.status(200).json({
    'users': ['userOne', 'userTwo', 'userFour']
  })
})

app.listen(5000)
