import React, { useEffect, useState } from 'react';
import Header from './containers/Header';
import Tail from './containers/Tail';
import axios from 'axios';
import Desc from './containers/Desc';

const App: React.FC = () => {
  const [notice, setNotice] = useState();
  const [noticeMod, setNoticeMod] = useState("Menu");
  const [noticeNumber, setNoticeNumber] = useState<number>(-1);
  const [pageNum, setPageNum] = useState(0)
  const chagneMod = (mod: string, noticeNum: number) => {
    setNoticeMod(mod);
    setNoticeNumber(noticeNum);
    changePage(0);
  }
  const changePage = (pageNum: number): void => {
    setPageNum(pageNum);
  }
  useEffect(() => {
    //該当ページの掲示物のための通信
    axios.post('http://localhost:3001/notice/').then((res) => setNotice(res.data));
  }, [])
  if (notice === undefined) {
    return (<>loding</>);
  } else {
    return (
      <>
        <Header changeMod={chagneMod}></Header>
        <Desc notice={notice} changeMod={chagneMod} noticeMod={noticeMod} noticeNumber={noticeNumber}
          changePage={changePage} pageNum={pageNum}></Desc>
        <Tail></Tail>
      </>
    )
  }
}

export default App;
