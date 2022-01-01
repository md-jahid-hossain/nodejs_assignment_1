const User = (sequelize, Sequelize) => {
    const { STRING, INTEGER, JSON } = Sequelize.DataTypes;

    return sequelize.define('users', {
        username: { type: STRING, allowNull: false },
        email: { type: STRING, allowNull: false },
        password: { type: STRING, allowNull: false },
        first_name: { type: STRING },
        last_name: { type: STRING },
        age: { type: INTEGER },
        phone_number: { type: STRING },
        address: { type: JSON },
    });
};

module.exports = User;
