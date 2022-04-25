import React, { useState } from 'react';
import noticeType from '../../defineType/notice'
import { Buffer } from 'buffer';
import './NoticeDetails.css'
import useAjaxNoticeD from '../../hooks/useAjaxNoticeD'
type props = {
    noticeNumber: number,
    changeMod: (mod: string, noticeNum: number) => void,
}

function MenuDetails(props: props) {
    const [selectedNotice, setSelectedNotice] = useState<noticeType>();
    if (selectedNotice === undefined) {
        //LOADING
        useAjaxNoticeD(props.noticeNumber).then(res => setSelectedNotice(res))
        //選んだ掲示板がない場合は通信してさがす
        return <>Loading</>;
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
                        <div style={{ float: "right" }}>
                            <span>{selectedNotice.date}</span>&nbsp;
                            <button className="notice_update" onClick={() => { props.changeMod("Update", props.noticeNumber) }}>수정</button>&nbsp;
                            <button className="notice_delete">삭제</button>
                        </div>
                    </div>
                    <p>{content}</p>
                    <div className="noticeSideBanner"></div>
                </div>
                <form className='commentCreate' onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input type="text" name="name" placeholder="name" />
                        <input type="text" name="password" placeholder="password" />
                    </div>
                    <div>
                        <textarea name="content" className="comment_content"></textarea>
                        <button type="submit">작성</button>
                    </div>
                </form>
                <div className="comment"><br /></div>
            </>)
    }
}
export default MenuDetails