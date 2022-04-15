import React from "react";

function header() {
    return (
        <div className="header">
            <div className="title" onClick={() => { "location.href = '/' " }} >민규의 <br />고민 상담소</div>
            <div className="menu">
                <ul>
                    <li onClick={() => { "location.href = '/'" }}>HOME</li>
                    <li>여기는?</li>
                    <li>저는?</li>
                    <li>연락처</li>
                </ul>
            </div>
        </div>
    )
}

export default header