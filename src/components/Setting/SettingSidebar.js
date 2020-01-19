import React            from 'react';
import admin            from '../../assets/img/Setting/Admin.png'
import { Form, Button } from 'react-bootstrap';
import { NavLink }      from 'react-router-dom';

const SettingSidebar = () => {
    return(
        <div className="o-container">
            <h5 className="c-setting__name u-bold-weight">تنظیمات</h5>
            <div className="c-setting__sidebar">
            <div className="u-medium-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-row u-justify-content-around">
                <img src={admin} alt="" height="70"/>
                <div className=" u-small-margin-top">
                    <h5 className="u-no-margin-vertical u-smallx-padding-bottom">Del-eng20</h5>
                    <span className="c-setting__sidebar-title">مشاهده پروفایل</span>
                </div>  
            </div>
            <div className="c-setting__form u-medium-padding-bottom u-display-flex u-flex-column">
            <NavLink to="/settings" activeClassName="selected" activeStyle={{background: "#efefef" ,
        border:"1px solid #efefef",
  }}>
                اطلاعات حساب کاربری
            </NavLink>
            <NavLink to="/notification" activeClassName="selected" activeStyle={{background: "#efefef",
        border:"1px solid #efefef",
  }}>
                 طریقه ی اطلاع رسانی
            </NavLink>
            </div>
            </div>
        </div>
    );
}
export default SettingSidebar;