const { Router } = require('express')
const { UserModel } = require('../models/User')
const { userRoutes } = require('./users.routes')

const router = Router()

router.get('/', (req, res) => {
    const { path } = req
    return res.status(200).json({ message: 'api', pathname: path }).end()
})

router.post('/login', async (req, res, next) => {
    try {
        const { body } = req
        const { usuario, password } = body

        const isLogin = await UserModel.find({ usuario })

        if (isLogin.length === 0) return res.status(404).json({ message: 'this user has not exist' }).end()
        const incorrectPwd = password === isLogin[0].password

        if (!incorrectPwd) return res.status(403).json({ message: 'error in credentials' }).end()

        return res.status(200).json(isLogin[0]).end()
    } catch (err) {
        return next(err)
    }
})

router.use('/users', userRoutes)

module.exports = router