import db from "../config/database.js"
import pkg from 'sequelize';
const { DataTypes } = pkg;

const BasicEvent = db.define("basic_event", {
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    image_url: { type: DataTypes.STRING },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE }
}, {
    freezeTableName: true,
    timestamps: false
})

export default BasicEvent