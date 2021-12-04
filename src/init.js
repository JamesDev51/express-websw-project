import "@babel/polyfill"
import app from "./app.js"
import dotenv from "dotenv"
import "./db.js"
dotenv.config()

const PORT =process.env.PORT || 8000
const handleListening= ( ) => console.log(`✅ Listening on: http://localhost:${PORT}`)

app.listen(PORT, handleListening)
