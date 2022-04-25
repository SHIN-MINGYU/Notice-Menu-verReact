import axios from 'axios';
import React, { useState } from 'react';
import GetMenuList from '../../components/GetMenuList';
import GetPageList from '../../components/GetPageList'
import noticeType from '../../defineType/notice';
import './Menu.css'

type props = {
    notice: noticeType[],
    changeMod: (mod: string, noticeNum: number) => void,
    changePage: (pageNum: number) => void,
    pageNum: number,
}
function menu(props: props) {
    //propsは上から15番目までしか見せてくれないので
    //stateがあったらstateを使うこの時 page変更する度にajaxリクエスト
    const [notice, setNotice] = useState<noticeType[]>();
    const [prevPageNum, setPrevPageNum] = useState<number>(0);
    //@params notice => 現在のページの情報が格納されている変数
    //@prevPageNum => componentDidMount()を具現するための変数
    const noticeHandler = (pageNum: number) => {
        if (pageNum === 0) {
            return <GetMenuList notice={props.notice} changeMod={props.changeMod}></GetMenuList>
        } else {
            if (notice == undefined) {
                //最初にレンダーした時はstateのnoticeはないのでrequesst
                axios.post('http://localhost:3001/notice/', { pageNum: pageNum }).then((res) => { setNotice(res.data) })
            } else if (pageNum != prevPageNum) {
                //前のページと違うページだったらそのページへまたrequest
                setPrevPageNum(pageNum)
                axios.post('http://localhost:3001/notice/', { pageNum: pageNum }).then((res) => { setNotice(res.data) })
            } else {
                //前のページnumberと今のページnumberが同じだったらその時menuをレンダー
                return <GetMenuList notice={notice} changeMod={props.changeMod}></GetMenuList>
            }
        }
    }
    return (
        <>
            <h3 style={{ marginLeft: "2vw", fontSize: "1.5vw", fontFamily: "SF_IceLemon" }}> 글</h3>
            <div className="choosemenu">
                <button className="type1" >전체</button>
                <button className="type2">공감</button>
            </div>
            <div style={{ marginLeft: "2vw", marginRight: "2vw", marginTop: "0.5vw", textAlign: "center" }}>
                <div className="noticeHeader">
                    <table style={{ width: "100%", textAlign: "center" }}>
                        <colgroup>
                            <col style={{ width: "7%" }} />
                            <col />
                            <col style={{ width: "7%" }} />
                            <col style={{ width: "14%" }} />
                            <col style={{ width: "7%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <td>번호</td>
                                <td>제목</td>
                                <td>작성자</td>
                                <td>작성일자</td>
                                <td>공감수</td>
                            </tr>
                        </thead>
                        {noticeHandler(props.pageNum)}
                        {/*メニュテーブルを作ってくれるhooks */}
                    </table>
                </div>
                <GetPageList notice_Maxnum={props.notice[0].notice_id} changePage={props.changePage}></GetPageList>
                <div style={{ display: "inline-block", fontFamily: "SF_IceLemon" }}></div>
                <button style={{ float: "right" }} onClick={() => props.changeMod("Create", -1)}>생성</button>
                <br />
                <form action="/notice/search_process" method="post">
                    <select name="type">
                        <option value="content">내용</option>
                        <option value="name">이름</option>
                    </select>
                    <input type="text" name="searchText" />
                    <button type="submit">검색</button>
                </form>
            </div>
        </>
    )
}
export default menu;