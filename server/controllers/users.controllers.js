const { UserModel } = require('../models/User')

class UsersControllers {
    findAll = async (_, res, next) => {
        try {
            const allUsers = await UserModel.find()

            return res.status(200).json(allUsers).end()
        } catch (error) {
            return next(error)
        }
    }

    findById = async (req, res, next) => {
        try {
            const { id } = req.params
            const userById = await UserModel.findById(id)

            if (!userById)
                return res
                    .status(404)
                    .json({
                        status: 404,
                        message: 'this id han\'t exist or register with any user'
                    })
                    .end()

            return res.status(200).json(userById).end()
        } catch (error) {
            return next(error)
        }
    }

    saveUser = async (req, res, next) => {
        try {
            const { body } = req
            const userBeforeSave = new UserModel({ ...body })
            console.log('ss', userBeforeSave)
            const userSaved = await userBeforeSave.save()
            return res.status(202).json(userSaved).end()
        } catch (error) {
            return next(error)
        }
    }

    updateById = async (req, res, next) => {
        try {
            const { id } = req.params
            return res.status(200).json({ id, message: 'deleted' })
        } catch (error) {
            return next(error)
        }
    }

    deleteById = async (req, res, next) => {
        try {
            const { id } = req.params
            return res.status(200).json({ id, message: 'deleted' })
        } catch (error) {
            return next(error)
        }
    }
}

const userController = new UsersControllers()

module.exports = { userController }