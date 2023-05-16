const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  'postgres://postgres:4232@localhost:5432/articlesApp'
)
