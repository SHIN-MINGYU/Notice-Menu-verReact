import React, { useState } from "react";
type props = {
    notice_Maxnum: number,
    changePage: (pageNum: number) => void
}
function GetPageList(props: props) {
    const [pages, setPages] = useState<JSX.Element[]>()
    //@params pages => ページエレメントを格納する変数
    let maxPage = 0;
    let pageArr = []
    if (props.notice_Maxnum % 15 === 0) {
        maxPage = props.notice_Maxnum / 15
    } else {
        maxPage = Math.ceil(props.notice_Maxnum / 15)
    }
    for (let i = 0; i < maxPage; i++) {
        pageArr.push(i + 1)
    }
    //今はページエレメントの数の制限がないけど後で10個ずつ割ろう
    if (pages === undefined) {
        setPages(pageArr.map((el) => <a key={el} className="pageList" onClick={() => { props.changePage(el) }}>[{el}]</a>))
    }
    return (
        <div>
            {pages}
        </div>
    )
}
export default GetPageList;