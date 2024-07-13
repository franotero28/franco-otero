import express from 'express'
import { getHorarios } from '../controllers/horaController.js'
const router = express.Router()

router.get('/', getHorarios)

export default router