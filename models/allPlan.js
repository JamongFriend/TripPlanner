const Sequelize = require('sequelize');

module.exports = class AllPlan extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.STRING(100),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
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
            },
            restaurant: {
                type: Sequelize.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'AllPlan',
            tableName: 'all_plans',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        // AllPlan이 Plan과의 HasOne 관계를 가지도록 설정
        AllPlan.hasOne(db.Plan, { foreignKey: 'allPlanId' });
    }
};

module.exports = AllPlan;