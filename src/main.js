import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
const server = express()
const PORT = process.env.PORT || 3000

dotenv.config();
server.use(express.json()); //middleware for json
server.use(cors());  // middleware for cross origins requests

server.get('/',(req,res)=>{
    res.send("server is live");
})
server.listen(PORT,()=>{
    console.log(`server is live at the port http://localhost:${PORT}`)
})