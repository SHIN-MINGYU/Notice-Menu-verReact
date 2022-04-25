
import axios from 'axios';
async function useAjaxNoticeD(noticeNumber: number) {
    //正確な掲示板情報を表すためにAJAX通信
    //@params noticeNumber : 掲示板を検索するための数字
    return await axios.post('http://localhost:3001/notice/detail/' + noticeNumber).then((res) => res.data[0])
}
export default useAjaxNoticeD