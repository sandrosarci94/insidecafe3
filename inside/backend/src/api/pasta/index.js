import express from 'express'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const pastaJSONPath = join(
  dirname(fileURLToPath(import.meta.url)),
  'pasta.json'
)

const pastaRouter = express.Router()

pastaRouter.get('/', (request, response) => {
  const fileContent = fs.readFileSync(pastaJSONPath)
  const pasta = JSON.parse(fileContent)
  response.send(pasta)
})

export default pastaRouter
