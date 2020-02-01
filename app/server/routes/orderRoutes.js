import { Router } from 'express'
import OrderController from '../controller/orderController'

const router = Router();
router.get('/', OrderController.getAll)
router.post('/', OrderController.addOrder)
router.get('/:id', OrderController.getIdOrder)
router.put('/:id', OrderController.updatedOrder)
router.delete('/:id', OrderController.deleteOrder)

export default router