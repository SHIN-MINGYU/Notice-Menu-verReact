import React, { useState } from "react";
import useAjaxNoticeD from '../../hooks/useAjaxNoticeD'
import noticeType from '../../defineType/notice'
type props = {
    noticeNumber: number,
    changeMod: (mod: string, noticeNum: number) => void,
}
function NoticeUpdate(props: props) {
    const [selectedNotice, setSelectedNotice] = useState<noticeType>();
    const [titleValue, setTitleValue] = useState<string>();
    const [contentValue, setContentValue] = useState<string>();
    const onTitleChange = (e: any) => {
        setTitleValue(e.target.value)
    }
    const onContentChange = (e: any) => {
        setContentValue(e.target.value)
    }
    /*
    @params  selectedNotice => 多数のnotice情報の中で特定なnoticeを格納するための変数
    @params titleValue, contentValue => reactではインプットのvalue値が指定されていたらを換えれないのでstateとして扱う
    @params onTitleChange onContentChange => インプット値が変わったらすぐに値を換えてくれる関数
    */
    if (selectedNotice === undefined) {
        useAjaxNoticeD(props.noticeNumber).then(res => { setSelectedNotice(res) })
        return <>Loading</>
    } else {
        if (titleValue === undefined || contentValue === undefined) {
            setTitleValue(selectedNotice.title);
            setContentValue(Buffer.from(selectedNotice.content.data).toString());
        }
        return (
            <>
                <h3>글 수정하기</h3>
                <form action="http://localhost:3001/notice/update" method="post">
                    <input type="hidden" name="notice_id" value={selectedNotice.notice_id}></input>
                    <input className="noticeTitle" name="title" type="text" placeholder="제목을 입력해주세요" value={titleValue} onChange={(e) => { onTitleChange(e) }} />
                    <input className="noticeNP" type="text" name="name" placeholder="이름" value={selectedNotice.name} readOnly />
                    <input className="noticeNP" type="text" name="password" placeholder="비밀번호" value={selectedNotice.password} readOnly />
                    <textarea className="noticeContent" name="content" placeholder="내용을 입력해주세요" value={contentValue} onChange={(e) => { onContentChange(e) }}></textarea>
                    <div style={{ float: "right" }}>
                        <button type="submit">수정</button>
                        <button onClick={(e) => {
                            e.preventDefault();
                            props.changeMod("Detail", props.noticeNumber);
                        }}>취소</button>
                    </div>
                </form>
            </>
        )
    }
}
export default NoticeUpdate