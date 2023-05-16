const DataTypes = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
});

const Article = sequelize.define('article', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    text: {type: DataTypes.TEXT},
    createdAt: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
});

User.hasMany(Article);
Article.belongsTo(User);

module.exports = {
    User,
    Article
}
