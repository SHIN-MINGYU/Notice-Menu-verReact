import React from "react";

function menu() {

    return (
        <>
            <h3 style={{ marginLeft: "2vw", fontSize: "1.5vw", fontFamily: "SF_IceLemon" }}> 글</h3>
            <div className="choosemenu">
                <button className="type1" onClick={() => { "location.href ='/'" }}>전체</button>
                <button className="type2" onClick={() => { "location.href ='/'" }} >공감</button>
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
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div style={{ display: "inline-block", fontFamily: "SF_IceLemon" }}></div>
                <button style={{ float: "right" }}>생성</button>
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