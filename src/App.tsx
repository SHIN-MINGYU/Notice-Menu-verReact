import React, { useEffect, useState } from 'react';
import Header from './containers/Header';
import Tail from './containers/Tail';
import axios from 'axios';
import Desc from './containers/Desc';

const App: React.FC = () => {
  const [notice, setNotice] = useState();
  useEffect(() => {
    //該当ページの掲示物のための通信
    axios.post('http://localhost:3001/notice/pages/1').then((res) => setNotice(res.data));
  }, [])
  if (notice === undefined) {
    return (<>loding</>);
  } else {
    return (
      <>
        <Header></Header>
        <Desc notice={notice}></Desc>
        <Tail></Tail>
      </>
    )
  }
}

export default App;
