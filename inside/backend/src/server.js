import express from 'express'
import cors from 'cors'
import pastaRouter from './api/pasta/index.js'

const server = express()
const port = 3001

server.use(cors())
server.use('/pasta', pastaRouter)

server.listen(port, () => {
  console.log(`Ottimo, il server è attivo e sta girando sulla porta ${port}`)
})
