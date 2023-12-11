const Sequelize = require('sequelize');

module.exports = class Plan extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            date: {
                type: Sequelize.STRING(100),
                allowNull: true
            },
            peoples: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            perpose: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            place: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            hotel: {
                type: Sequelize.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Plan',
            tableName: 'plans',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    //이거 수정해야함
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
    }
};
