type notice = {
    notice_id: number,
    title: string,
    name: string,
    date: string,
    sympathy: number,
    hate: number,
    content: {
        data: string,
        type: string
    }
    password: string
}
export default notice;