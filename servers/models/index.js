const Sequelize = require('sequelize');
const Notice = require('./notice');
const sympathyGroup = require('./sympathygroup');
const Comment = require('./comment');
const Login_Info = require('./login_info');
const env = process.env.NODE_ENV || 'development' //配るときproduction
const config = require('../config/config.json')[env]

const sequelize = new Sequelize(config.database, config.username, config.pasword, config);

const db = {}

db.sequelize = sequelize;

db.Notice = Notice;
db.sympathyGroup = sympathyGroup;
db.Comment = Comment;
db.Login_Info = Login_Info;


Notice.init(sequelize);
Notice.associate(db);
sympathyGroup.init(sequelize);
sympathyGroup.associate(db);
Comment.init(sequelize);
Comment.associate(db);
Login_Info.init(sequelize);
Login_Info.associate(db);
Comment.removeAttribute('id')
Login_Info.removeAttribute('id')

module.exports = db;