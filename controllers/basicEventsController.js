import BasicEvent from "../models/basicEvent.js";

export const getBasicEvent = async (req, res) => {
    try {
        const event = await BasicEvent.findByPk(req.params.id)
        res.send(event)
    } catch (e) {
        res.json({message: e.message})
    }
}