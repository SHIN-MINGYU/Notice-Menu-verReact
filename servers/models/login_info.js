const Sequelize = require('sequelize')

module.exports = class Login_Info extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nickname: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        }, {
            sequelize,
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "login_info", // 테이블 이름 정의
            timestamps: false,
            underscored: false,
            paranoid: false
        })
    }
    static associate(db) {

    }
}