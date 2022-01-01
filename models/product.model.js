const sequelize = require('./db.model');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('products', {
    title: { type: DataTypes.STRING(255), allowNull: false },
    price: { type: DataTypes.NUMBER, allowNull: false },
    category: { type: DataTypes.STRING(255), allowNull: false },
    quantity: { type: DataTypes.NUMBER, allowNull: false },
    rate: { type: DataTypes.STRING }
});

module.exports = Product;
