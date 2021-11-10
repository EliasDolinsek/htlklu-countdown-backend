import BasicEvent from "../models/basicEvent.js";
import RecurringEvent from "../models/recurringEvent.js";
import {transformRecurringEvent} from "./recurringEventsTransformer.js";

export const getAllEvents = async (req, res) => {
    try {
        const basicEvents = await BasicEvent.findAll()
        const recurringEvents = await RecurringEvent.findAll()
        res.json({
            basicEvents: basicEvents,
            recurringEvents: recurringEvents.map((e) => transformRecurringEvent(e))
        })
    } catch (e) {
        res.json({message: e.message})
    }
}
