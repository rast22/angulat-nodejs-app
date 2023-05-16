
const postService = require('../services/postService');

class PostController {
   async create(req, res) {
     const {userId, title, content} = req.body;
     if (!userId || !content) {
       return res.status(400).json({message: 'Incorrect request'})
     }
     const post = await postService.create(userId, title, content)
     return res.json({'success': !!post})
   }

   async getAll(req, res) {
      const posts = await postService.getAll()
     console.log(posts)
      return res.json(posts)
   }
}

module.exports = new PostController();
