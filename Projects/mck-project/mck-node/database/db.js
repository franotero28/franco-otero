import { Sequelize} from 'sequelize';

// Configura la conexión a la base de datos
const db = new Sequelize('database_app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // Asegúrate de que el puerto sea correcto (por defecto 3306 para MySQL)
});

export default db;