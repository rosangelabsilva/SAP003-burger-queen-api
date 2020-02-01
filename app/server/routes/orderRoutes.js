import { Router } from 'express'
import OrderController from '../controller/orderController'

const router = Router();
router.get('/', OrderController.getAll)
router.post('/', OrderController.addOrder)

export default router