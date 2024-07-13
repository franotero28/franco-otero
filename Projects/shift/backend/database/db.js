// Aca hago la conexion a la base de datos 
import { Sequelize } from "sequelize";

const datab = new Sequelize('database_shift', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
}) 

export default datab