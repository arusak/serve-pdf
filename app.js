import express from 'express'
import fs from 'fs'
import https from 'https'
// import cors from 'cors'
import path from 'path'
import minimist from 'minimist'

// Default HOSTNAME if not provided via command line arguments
const DEFAULT_HOSTNAME = 'localhost'
const PORT = 8787
const PDF_FILE_PATH = path.join(process.cwd(), 'document.pdf')
const HTML_FILE_PATH = path.join(process.cwd(), 'index.html')

// Parse command line arguments
const args = minimist(process.argv.slice(2))
const HOSTNAME = args.hostname || DEFAULT_HOSTNAME

const app = express()
app.use(express.json())
// app.use(cors()) // Enable CORS for all routes

app.get('/pdf', (req, res) => {
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'inline; filename="document.pdf"')
    res.sendFile(PDF_FILE_PATH)
});

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE_PATH)
});

const sslOptions = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt'),
}

https.createServer(sslOptions, app).listen(PORT, HOSTNAME, () => {
    console.log(`Server running at https://${HOSTNAME}:${PORT}`)
})
