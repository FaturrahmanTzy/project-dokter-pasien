import express from 'express';
const router = express.Router()

import { getAll } from "./controller.js";

router.get('/', getAll);

export default router;