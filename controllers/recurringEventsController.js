import RecurringEvent from "../models/recurringEvent.js";
import {transformRecurringEvent} from "./recurringEventsTransformer.js";

export const getRecurringEvent = async (req, res) => {
    try {
        const event = await RecurringEvent.findByPk(req.params.id)
        res.send(transformRecurringEvent(event.get()))
    } catch (e) {
        res.json({message: e.message})
    }
}