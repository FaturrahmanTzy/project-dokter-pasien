import express from 'express';
const router = express.Router()

import { getDokter } from "./controller.js";

router.get('/dokter', getDokter);

export default router;