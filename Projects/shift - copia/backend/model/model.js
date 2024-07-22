import datab from '../database/db.js'

import { DataTypes } from 'sequelize'

const horariosModel = datab.define("horarios",{
    hora:{ type: DataTypes.STRING},
    dia:{ type: DataTypes.STRING}
})

export default horariosModel

