import axios from 'axios';
import React, { useState } from 'react';
import noticeType from '../../defineType/notice'
import { Buffer } from 'buffer';
type props = {
    noticeNumber: number
}
async function ajaxNotice(noticeNumber: number) {
    //正確な掲示板情報を表すためにAJAX通信
    //@params noticeNumber : 掲示板を検索するための数字
    return await axios.post('http://localhost:3001/notice/' + noticeNumber).then((res) => res.data[0])
}
function MenuDetails(props: props) {
    const [selectedNotice, setSelectedNotice] = useState<noticeType>();
    if (selectedNotice === undefined) {
        //LOADING
        ajaxNotice(props.noticeNumber).then(res => setSelectedNotice(res))
        //選んだ掲示板がない場合は通信してさがす
        return <></>;
    }
    else {
        const content = Buffer.from(selectedNotice.content.data).toString();
        //content buffer形になっている掲示板の内容を文字列化する
        return (
            <>
                <h1>고민 상담</ h1>
                <div className="notice_header">
                    <h3>{selectedNotice.title}</h3>
                    <div className="noticeUI">
                        <span>{selectedNotice.date}</span>
                        <div>
                            <button className="notice_update" >수정</button>
                            <button>삭제</button>
                        </div>
                    </div>
                    <p>{content}</p>
                    <div className="noticeSideBanner"></div>
                </div>
            </>)
    }
}
export default MenuDetails