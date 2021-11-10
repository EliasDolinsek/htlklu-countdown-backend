import express from "express";
import {getRecurringEvent} from "../controllers/recurringEventsController.js";

const recurringEventsRouter = express.Router()
recurringEventsRouter.get("/:id", getRecurringEvent)

export default recurringEventsRouter