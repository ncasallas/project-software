const { Router } = require('express')
const { userController } = require('../controllers/users.controllers')
const router = Router()

router.get('/', userController.findAll)

router.get('/:id', userController.findById)

router.post('/', userController.saveUser)

router.put('/:id', userController.updateById)

router.delete('/:id', userController.deleteById)

module.exports = { userRoutes: router }