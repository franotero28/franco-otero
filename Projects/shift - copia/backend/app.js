// Aca levanto el servidor
import express from "express"
import cors from "cors"
import rutaHorarios from './routes/routes.js'

const app = express()

app.use( cors() )
app.use( express.json() )
app.use( "/horarios", rutaHorarios)

app.get("/", (req,res)=>{
    res.send("hola mundo")
})

app.listen(8000, ()=>{
    console.log("server levantado in http://localhost:8000/")
})