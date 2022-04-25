const Sequelize = require('sequelize');

module.exports = class Commnet extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            Cname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            Cpassword: {
                type: Sequelize.STRING,
                allowNull: false
            },
            Ccontent: {
                type: Sequelize.BLOB,
                allowNull: false,
            },
            comment_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "comment", // 테이블 이름 정의
            timestamps: false,
            underscored: false,
            paranoid: false
        }
        )
    }
    static associate(db) {
        db.Comment.belongsTo(db.Notice, { foreignKey: 'notice_id', targetKey: 'notice_id' })
    }

}