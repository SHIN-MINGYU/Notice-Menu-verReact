import React from "react";
import noticeType from '../defineType/notice';

type props = {
    notice: noticeType[],
    changeMod: (mod: string, noticeNum: number) => void
}

function getMenuList(props: props) {
    //noticeの情報をもらってテーブル形で返してくれる関数
    const noticeMenu: JSX.Element[] = props.notice.map((list: any, i: number = 1) => (
        <tr key={i} className="noticeList" onClick={() => props.changeMod("Detail", list.notice_id)}>
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
    return (
        <tbody>
            {noticeMenu}
        </tbody>
    )
}
export default getMenuList;
