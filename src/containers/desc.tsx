import React, { useState } from "react";
import Main from './main/Menu';
import MenuDetails from './main/MenuDetails';
import noticeType from '../defineType/notice';
type props = {
    notice: noticeType[]
}
function Desc(props: props) {
    const [noticeMod, setNoticeMod] = useState("Menu");
    const [noticeNumber, setNoticeNumber] = useState<number>(-1);
    const chagneMod = (mod: string, noticeNum: number) => {
        setNoticeMod(mod);
        setNoticeNumber(noticeNum);
    }
    const modChnager = (mod: string, noticeNumber: number) => {
        //@params mod : 掲示板モード
        //@params noticeNumber : 掲示板DEATILSの番号
        if (mod === "Menu") {
            return <Main notice={props.notice} changeMod={chagneMod}></Main>
        } else if (mod === "Detail") {
            return <MenuDetails noticeNumber={noticeNumber}></MenuDetails>
        }
    }
    return (
        <div className="Desc">
            <div className="leftside"></div>
            <div className="Main">
                {modChnager(noticeMod, noticeNumber)}
            </div>
            <div className="rightside"></div>
        </div>
    )
}

export default Desc