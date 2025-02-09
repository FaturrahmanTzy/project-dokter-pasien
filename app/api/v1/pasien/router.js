import express from 'express'
import { getPasien } from './controller.js'

const router = express.Router()

router.get('/pasien', getPasien)

export default router