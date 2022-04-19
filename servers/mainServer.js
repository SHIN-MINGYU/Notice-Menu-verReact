const express = require('express');
const app = express();
const { sequelize } = require('./models');
const Notice = require('./models/notice');
const sympathyGroup = require('./models/sympathygroup');
const Comment = require('./models/comment');
const Login_Info = require('./models/login_info');
const cors = require('cors')

app.use(cors())
sequelize.sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });
const port = 3001;
app.post('/notice/pages/:pagesNum', async (req, res) => {
    const notice = await Notice.findAll({
        order: [['notice_id', 'DESC']],
        offset: (req.params.pagesNum - 1) * 15,
        limit: 15
    })
    res.json(notice);
})
app.post('/notice/:noticeNum', async (req, res) => {
    const selectedNotice = await Notice.findAll({
        where: { notice_id: req.params.noticeNum }
    })
    res.json(selectedNotice);
})
app.post('/notice/length', async (req, res) => {
    const notice = await Notice.findAll()
    res.json(notice.length)
})
app.get('/sym', async (req, res) => {
    const sym = await sympathyGroup.findAll();
    res.json(sym);
})
app.get('/com', async (req, res) => {
    const com = await Comment.findAll();
    res.json(com);
})
app.get('/user_info', async (req, res) => {
    const info = await Login_Info.findAll();
    res.json(info)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})