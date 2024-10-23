import express from 'express'
import { screenQuery, validateQuery, handleQuery, formatResults } from '../controllers/queries.js'

const router = express.Router();

router.get('*', [screenQuery, validateQuery, handleQuery, formatResults]);

export { router }