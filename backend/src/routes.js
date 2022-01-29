const express = require('express')
const userController = require('./controllers/userController')
const messageController = require('./controllers/messageController')
const channelController = require('./controllers/channelController')

const routes = express.Router()

routes.get('/user', userController.index)
routes.get('/user/:id', userController.index)
routes.post('/user', userController.create)
routes.delete('/user/:id_user', userController.delete)

routes.get('/message', messageController.index)
routes.get('/message/:id', messageController.index)
routes.post('/message', messageController.create)
routes.delete('/message/:id_mensagem', messageController.delete)

routes.get('/channel', channelController.index)
routes.get('/channel/:id', channelController.index)
routes.post('/channel', channelController.create)
routes.delete('/channel/:id_canal', channelController.delete)

module.exports = routes