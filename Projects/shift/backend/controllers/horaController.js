import horariosModel from "../model/model.js";

export const getHorarios = async (req, res) =>{
    try {
        const horarios = await horariosModel.findAll()
        res.json(horarios)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getHorario = async (req, res) =>{
    try {
        const horarios = await horariosModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(horarios[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createHora = async (req,res)=>{
    try {
        await horariosModel.create(req.body)
        res.json({
            "message":"Registro Creado"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteHora = async (req, res) =>{
    try {
        await horariosModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            "message":"Registro Eliminado"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}