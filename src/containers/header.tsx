import React, { useState } from "react";
import './Header.css'

function Header() {
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
            <div className="title" onClick={() => { "location.href = '/' " }} >민규의 <br />고민 상담소</div>
            <div className="menu">
                <ul>
                    <li onClick={() => { "location.href = '/'" }}>HOME</li>
                    <li className="m-5 bg-yellow-500 text-blue-500 font-bold">여기는?</li>
                    <li>저는?</li>
                    <li>연락처</li>
                </ul>
            </div>
            <>{LoginStatus(isLogined)}</>
        </div>
    )
}

export default Header;