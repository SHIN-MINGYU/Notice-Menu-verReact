import React, { useState } from "react";
import './Header.css'
type props = {
    changeMod: (mod: string, noticeNum: number) => void,
}
function Header(props: props) {
    const [isLogined, setIsLogined] = useState<boolean>(false)
    const LoginStatus = (isLogined: boolean) => {
        if (isLogined) {
            return null;
        } else {
            return <span style={{ position: "absolute", right: "20px" }}>LOGIN</span>
        }
    }
    return (
        <div className="Header">
            <div className="title" onClick={() => props.changeMod("Menu", -1)} >민규의 <br />고민 상담소</div>
            <div className="menu">
                <ul>
                    <li onClick={() => props.changeMod("Menu", -1)}>HOME</li>
                    <li>여기는?</li>
                    <li>저는?</li>
                    <li>연락처</li>
                </ul>
            </div>
            <>{LoginStatus(isLogined)}</>
        </div>
    )
}

export default Header;