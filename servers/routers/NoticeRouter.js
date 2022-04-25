const express = require('express');
const router = express.Router();
const Notice = require('../models/notice');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post('/', async (req, res) => {
    //noticeの上から15番目までサーチ
    if (req.body.pageNum === undefined) {
        req.body.pageNum = 1;
    }
    console.log(req.body.pageNum)
    const notice = await Notice.findAll({
        order: [['notice_id', 'DESC']],
        offset: (req.body.pageNum - 1) * 15,
        limit: 15
    })
    res.json(notice);
})
router.post('/detail/:noticeNum', async (req, res) => {
    //選ばれたnoticeを見せる
    const selectedNotice = await Notice.findAll({
        where: { notice_id: req.params.noticeNum }
    })
    res.json(selectedNotice);
})
router.post('/create', async (req, res) => {
    //notice create
    const NOW = new Date();
    let NOWFormat = "";
    NOWFormat = NOW.getFullYear() + "-" + (NOW.getMonth() + 1) + "-" + NOW.getDate();
    await Notice.create({
        notice_id: req.body.notice_id,
        title: req.body.title,
        name: req.body.name,
        date: NOWFormat,
        sympathy: 0,
        hate: 0,
        content: req.body.content,
        password: req.body.password
    })
    res.redirect('http://localhost:3000')
})

router.post('/update', async (req, res) => {
    //notice update
    const NOW = new Date();
    let NOWFormat = "";
    NOWFormat = NOW.getFullYear() + "-" + (NOW.getMonth() + 1) + "-" + NOW.getDate();
    await Notice.update({
        title: req.body.title,
        name: req.body.name,
        date: NOWFormat,
        content: req.body.content,
        password: req.body.password
    }, { where: { notice_id: req.body.notice_id } })
    res.redirect('http://localhost:3000')
})

module.exports = router