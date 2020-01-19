import React              from 'react';
import { slide as Menu }   from "react-burger-menu";

const SideBar = () => {
    return (
        <div>
            <Menu isOpen="false">
                <a className="menu-item" href="/">
                    خانه
                </a>

                <a className="menu-item" href="/login">
                    ورود
                </a>

                <a className="menu-item" href="/visitprofile">
                    مشاهده پروفایل
                </a>

                <a className="menu-item" href="/logout">
                    خروج
                </a>
           </Menu>
        </div>
    )
}
export default SideBar;