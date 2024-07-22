import express from "express"
import cors from "cors"
import db from "./database/db.js"
import blogRoutes from "./routes/routes.js"

const app = express()

app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

const port = process.env.PORT || 8000

try {
    await db.authenticate()
    console.log("conexion exitosa")
} catch (error) {
    console.log(`el error de conexion es : ${error}`)
}

app.get("/", (req,res)=>{
    res.send("hola mundo")
})

app.listen(port, ()=>{
    console.log(`server levantado in http://localhost:${port}`)
})


