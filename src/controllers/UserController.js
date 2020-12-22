class UserController {
  users = [
    {
      id: 1,
      name: "Guilherme"
    }
  ]

  async findById({ request, response }) {
    try {
      const { userId } = request.params

      const user = this.users.find(user => user.id === parseInt(userId))

      return response.status(200).send(user)
    } catch(error) {
      return response.status(500).send({
        message: "Error to find the user"
      })
    }
  }
}

module.exports = new UserController()