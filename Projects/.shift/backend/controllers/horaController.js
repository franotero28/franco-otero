import horariosModel from "../model/model.js";

export const getHorarios = async (req, res) =>{
    try {
        const horarios = await horariosModel.findAll()
        res.json(horarios)
    } catch (error) {
        res.json({message: error.message})
    }
}
