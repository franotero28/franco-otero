import { Sequelize, DataTypes } from 'sequelize';

// Configura la conexión a la base de datos
const db = new Sequelize('database_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' // Puedes cambiarlo a 'postgresql' si estás usando PostgreSQL
});


export default db;