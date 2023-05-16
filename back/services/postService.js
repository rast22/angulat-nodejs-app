const {Article, User} = require('../models/models')

class PostService {
  async create(userId, title, content) {
    try {
      const newPost = await Article.create({userId, title, text: content})
      return newPost
    } catch (e) {
      throw new Error(e)
    }
  }

  async getAll() {
    try {
      const posts = await Article.findAll({include:[{model: User, attributes: [ 'username']}], attributes: { exclude: ['userId'] }})
      return posts
    } catch (e) {
      throw new Error(e)
    }
  }

}
module.exports = new PostService();
