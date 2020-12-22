const { Router } = require('express')
const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/users/:userId', function (request, response) {
  return UserController.findById({ request, response })
})

module.exports = routes
