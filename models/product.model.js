const Product = (sequelize, Sequelize) => {
    const { STRING, NUMBER, JSON } = Sequelize.DataTypes;

    return sequelize.define('products', {
        title: { type: STRING, allowNull: false },
        price: { type: NUMBER, allowNull: false },
        category: { type: STRING, allowNull: false },
        quantity: { type: NUMBER, allowNull: false },
        rate: { type: JSON },
    });
};

module.exports = Product;
