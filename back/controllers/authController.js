const authService = require('../services/authService')


class AuthController {
  async login(req, res) {
    try {
      const {email, password} = req.body;
      if (!email || !password) {
        return res.status(400).json({message: 'Incorrect request'})
      }
      const result = await authService.login(email, password)
      return res.json(result)
    } catch (e) {
      res.status(400).json({message: 'Login error'})
    }
  }
  async register(req, res) {
    try {
      const {email, password, username} = req.body;
      if (!email || !password || !username) {
        return res.status(400).json({message: 'Incorrect request'})
      }
      const result = await authService.register(email, password,username)
      return res.json(result)

    } catch (e) {
      res.status(400).json({message: 'Register error'})
    }
  }
}

module.exports = new AuthController()
