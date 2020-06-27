import React from "react";
import "../css/mainpage.css";

function Header() {
    return (
        <div className="header-div">
            <div>showTheTree</div>
            <i 
                className="iconfont"
                title="说明"
                onClick={() => window.open('https://github.com/BLZbanme/show-the-tree')}
            >
                &#xe655;
            </i>
        </div>
    )
}

export default Header;