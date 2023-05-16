const { User } = require('../models/models')
const bcrypt = require('bcrypt')

class AuthService {
  async register(email, password, username) {
    const candidate = await User.findOne({ where: { email: email } })
    if (candidate) {
      console.log(candidate)
      throw new Error('User already exists')
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const user = await User.create({email:email, password:hashPassword, username:username})
    return {id: user.id, email: user.email , username: user.username}
  }
  async login(email, password) {
    const candidate = await User.findOne({ where: { email: email } })
    if (!candidate) {
      throw new Error('User not found')
    }
    let isPassEquals = await bcrypt.compareSync(password, candidate.password);
    if (!isPassEquals) {
      throw new Error('Неверный пароль');
    }
    return {id: candidate.id, email: candidate.email}
  }
}

module.exports = new AuthService()
