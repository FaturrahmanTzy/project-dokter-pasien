import express from 'express';
const router = express.Router()

import { getDokter, getPasien } from "./controller.js";

router.get('/', getDokter);
router.get('/dokter', getDokter);
router.get('/pasien', getPasien);

export default router;