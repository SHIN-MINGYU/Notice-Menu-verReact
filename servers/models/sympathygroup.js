const Sequelize = require('sequelize');
module.exports = class sympathyGroup extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            sympathy_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false
            }
        },
            {
                sequelize,
                charset: "utf8", // 한국어 설정
                collate: "utf8_general_ci", // 한국어 설정
                tableName: "sympathygroup", // 테이블 이름 정의
                timestamps: false,
                underscored: false,
                paranoid: false
            })
    }
    

    static associate(db) {

    }
}