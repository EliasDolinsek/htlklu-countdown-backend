import express from "express"
import {getAllEvents} from "../controllers/eventsController.js"
import basicEventsRouter from "./basicEventsRoutes.js";
import recurringEventsRouter from "./recurringEventsRoutes.js";

const eventsRouter = express.Router()

eventsRouter.get("/", getAllEvents)
eventsRouter.use("/basic", basicEventsRouter)
eventsRouter.use("/recurring", recurringEventsRouter)

export default eventsRouter