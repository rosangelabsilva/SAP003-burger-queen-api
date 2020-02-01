import { Router } from 'express'
import orderItemsController from '../controller/orderItemsController'

const router = Router();
router.post('/', orderItemsController.addOrderItems)

export default router