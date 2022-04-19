import React from "react";
import noticeType from '../defineType/notice';

type props = {
    notice: noticeType[],
    changeMod: (mod: string, noticeNum: number) => void
}
// 시발 함수 잘못짬.

function getMenuList(props: props) {
    const noticeMenu = props.notice.map((list: any, i: number = 1) => (
        <tr key={i} onClick={() => props.changeMod("Detail", list.notice_id)}>
            <td>
                {list.notice_id}
            </td>
            <td>
                {list.title}
            </td>
            <td>
                {list.name}
            </td>
            <td>
                {list.date}
            </td>
            <td>
                {list.sympathy}
            </td>
        </tr>)
    )
    return (<>
        {noticeMenu}
    </>)
}
export default getMenuList;
