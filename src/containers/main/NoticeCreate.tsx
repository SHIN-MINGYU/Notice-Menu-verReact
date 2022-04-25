import React from "react"
import './NoticeCU.css'
import noticeType from '../../defineType/notice';
type props = {
    notice: noticeType[]
    changeMod: (mod: string, noticeNum: number) => void
}
function MenuCreate(props: props) {
    return (
        <>
            <h3>글 생성하기</h3>
            <form action="http://localhost:3001/notice/create" method="post">
                <input type="hidden" name="notice_id" value={props.notice[0].notice_id + 1}></input>
                <input className="noticeTitle" name="title" type="text" placeholder="제목을 입력해주세요" />
                <input className="noticeNP" type="text" name="name" placeholder="이름" />
                <input className="noticeNP" type="text" name="password" placeholder="비밀번호" />
                <textarea className="noticeContent" name="content" placeholder="내용을 입력해주세요" ></textarea>
                <div style={{ float: "right" }}>
                    <button type="submit">생성</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        props.changeMod("Menu", -1);
                    }}>취소</button>
                </div>
            </form>
        </>
    )
}
export default MenuCreate 