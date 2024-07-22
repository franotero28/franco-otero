import express from 'express'
import { createHora, deleteHora, getHorario, getHorarios } from '../controllers/horaController.js'
const router = express.Router()

router.get('/', getHorarios)
router.post('/', createHora)
router.get('/:id', getHorario)
router.delete('/:id', deleteHora)

export default router