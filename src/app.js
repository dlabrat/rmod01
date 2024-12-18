
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

const publicPath = path.join(__dirname, './public')
app.use(express.static(publicPath))

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

