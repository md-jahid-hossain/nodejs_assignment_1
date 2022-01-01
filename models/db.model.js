const Sequelize = require('sequelize');
const Product = require('./product.model');
const User = require('./user.model');

const sequelize = new Sequelize('nodejs_assignment_1', 'root', '', {
    dialect: 'mysql',
    define: { timestamps: false },
    logging: false,
});

const db = {
    User: User(sequelize, Sequelize),
    Product: Product(sequelize, Sequelize),
};

module.exports = db;
