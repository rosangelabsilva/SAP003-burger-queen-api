import { Router } from 'express'
import ProductController from '../controller/productController'

const router = Router()
router.get('/', ProductController.getAll)
router.post('/', ProductController.addProduct)
router.get('/:id', ProductController.getId)
router.put('/:id', ProductController.updatedProduct)
router.delete('/:id', ProductController.deleteProduct)

export default router