import React, { useState } from "react";
import Menu from './main/Menu';
import NoticeDetails from './main/NoticeDetails';
import NoticeCreate from './main/NoticeCreate';
import NoticeUpdate from './main/NoticeUpdate';
import noticeType from '../defineType/notice';
type props = {
    notice: noticeType[],
    changeMod: (mod: string, noticeNum: number) => void,
    changePage: (pageNum: number) => void,
    pageNum: number,
    noticeMod: string,
    noticeNumber: number
    /*
    @params notice => 上から15番目までのnotice情報
    ＠params changeMod => modを換える関数
    @params changePage => pageを換える関数
    @params pageNum => pageNumber
    @params noticeMod => noticeのモード
    @params noticeNumber => 特定noticeを指定する変数
    */
}
function Desc(props: props) {
    const modChnager = (mod: string, noticeNumber: number) => {
        //@params mod : 掲示板モード
        //@params noticeNumber : 掲示板DEATILSの番号
        if (mod === "Menu") {
            return <Menu notice={props.notice} changeMod={props.changeMod} changePage={props.changePage} pageNum={props.pageNum}></Menu>
        } else if (mod === "Detail") {
            return <NoticeDetails noticeNumber={noticeNumber} changeMod={props.changeMod}></NoticeDetails>
        } else if (mod == "Create") {
            return <NoticeCreate notice={props.notice} changeMod={props.changeMod}></NoticeCreate>
        } else if (mod == "Update") {
            return <NoticeUpdate changeMod={props.changeMod} noticeNumber={noticeNumber}></NoticeUpdate>
        }
    }
    return (
        <div className="Desc">
            <div className="leftside"></div>
            <div className="Main">
                {modChnager(props.noticeMod, props.noticeNumber)}
            </div>
            <div className="rightside"></div>
        </div>
    )
}

export default Desc