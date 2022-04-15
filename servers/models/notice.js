const Sequelize = require('sequelize');

module.exports = class Notice extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            notice_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date: {
                type: Sequelize.DATEONLY,
                alowNull: false,
                defaultValue: Sequelize.NOW
            },
            sympathy: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            hate: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            content: {
                type: Sequelize.BLOB,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "notice", // 테이블 이름 정의
            timestamps: false,
            underscored: false,
            paranoid: false
        })
    }
    static associate(db) {

    }
}