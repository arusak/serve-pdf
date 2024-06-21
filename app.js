import express from 'express'
import fs from 'fs'
import https from 'https'
// import cors from 'cors'
import path from 'path'

const HOSTNAME = '192.168.133.182';
const PORT = 8787
const PDF_FILE_PATH = path.join(process.cwd(), 'document.pdf');
const HTML_FILE_PATH = path.join(process.cwd(), 'index.html');

const app = express()
app.use(express.json())
// app.use(cors()) // Enable CORS for all routes

app.get('/pdf', (req, res) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="document.pdf"');
    res.sendFile(PDF_FILE_PATH);
});

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE_PATH);
});

const sslOptions = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt'),
}

https.createServer(sslOptions, app).listen(PORT, HOSTNAME, () => {
    console.log(`Server running at https://${HOSTNAME}:${PORT}`)
})
