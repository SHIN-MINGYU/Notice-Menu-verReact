import React from "react";
import main from './main/menu';

function desc() {
    return (
        <div className="Desc">
            <div className="leftside"></div>
            <div className="main">{main()}</div>
            <div className="rightside"></div>
        </div>
    )
}

export default desc