import express from "express";
import {getBasicEvent} from "../controllers/basicEventsController.js";

const basicEventsRouter = express.Router()
basicEventsRouter.get("/:id", getBasicEvent)

export default basicEventsRouter