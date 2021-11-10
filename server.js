import express from "express";
import eventsRouter from "./routes/eventsRoutes.js";
import db from "./config/database.js";
import cors from "cors";

const app = express()

app.use(cors())
app.use(express.json())
app.use("/events", eventsRouter)

db.authenticate().then(() => {
    app.listen(5001, () => console.log('Server running at port 5001'))
})
