import express from 'express';
const router = express.Router()

import { getData } from "./controller.js";

router.get('/', getData);

export default router;