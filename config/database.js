import {Sequelize} from "sequelize"
import { config } from "dotenv"
config()

const db = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
})

export default db