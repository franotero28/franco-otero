import datab from '../database/db.js'

import { DataTypes } from 'sequelize'

const horariosModel = datab.define("horarios",{
    hora:{ type: DataTypes.INTEGER},
})

export default horariosModel

