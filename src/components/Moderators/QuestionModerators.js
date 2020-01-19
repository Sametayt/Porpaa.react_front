import React            from 'react'; 
import logo             from '../../assets/img/Moderator/baseline-favorite-24px.svg';
import { Link }         from 'react-router-dom';
import avatar           from '../../assets/img/Question/Group 308.svg';
import diff             from '../../assets/img/Moderator/diff.png.png';
import timerLow         from '../../assets/img/Question/Time3.svg';
import timerFull        from '../../assets/img/Question/Time1.svg';
import timerMedium      from '../../assets/img/Question/Time2.svg';
import avatar2          from '../../assets/img/Question/Group 357.svg';
import heart            from '../../assets/img/Header/heart.png';
import xp               from '../../assets/img/Header/king.png';
import tickGray         from '../../assets/img/Header/tick-gray.png';
import FilterProfile    from '../../components/Profiles/FilterProfileQuestions';
import AddReport        from '../../components/Questions/AddReport';
import QuestionMistake  from '../Moderators/QuestionMistake'
import bigflag          from '../../assets/img/Moderator/bigflag.png.png';
import flag             from '../../assets/img/Moderator/flag.png.png';
import redflag          from '../../assets/img/Moderator/redflag.png.png';
import bigpen           from '../../assets/img/Moderator/bigpen.png.png';
import window           from '../../assets/img/Moderator/window.png.png';
import { NavLink }      from 'react-router-dom';

import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton, OverlayTrigger, Popover } from 'react-bootstrap';



const QuestionModerators = (props) => {
    return (
        <div className="u-large-margin-bottom">
            <div className="o-row c-box_moderator u-display-flex u-flex-row u-justify-content-between u-medium-padding-vertical u-medium-margin-bottom">
                <div className="o-col-md-3 o-col-sm-6">
                  <div className="u-small-margin-right u-display-flex u-justify-content-center u-align-items-center">
                  <NavLink to="/moderatorNotification" activeClassName="selected">
                      <img src= {window} alt=""  className="c-box_moderator-img u-smallx-margin-right"/>
                      <span className="u-smallx-margin-right">17</span>
                      <span className="c-box_moderator-titile">کل</span>
                      </NavLink>
                  </div>
                </div>
                <div className="o-col-md-3 o-col-sm-6">
                  <div className="u-small-margin-right u-display-flex u-justify-content-center u-align-items-center">
                  <NavLink to="/moderatorNotification" activeClassName="selected" activeStyle={{background: "#efefef" ,
                     
                         }}>
                      <img src= {flag} alt=""  className="c-box_moderator-img u-smallx-margin-right"/>
                      <span className="u-smallx-margin-right">12</span>
                      <span className="c-box_moderator-titile">علمی</span>
                </NavLink>
                  </div>
                </div>
                <div className="o-col-md-3 o-col-sm-6">
                  <div className="c-box__filter-moderator u-small-margin-right u-display-flex u-justify-content-center u-align-items-center">
                  <NavLink to="/moderatorNotification" activeClassName="selected" activeStyle={{background: "#efefef" ,
                    
                   }}>
                      <img src= {redflag} alt=""  className="c-box_moderator-img u-smallx-margin-right"/>
                      <span className="u-smallx-margin-right">5</span>
                      <span className="c-box_moderator-titile">اخلاقی</span>
                      </NavLink>
                  </div>
                </div>
                <div className="o-col-md-3 o-col-sm-6">
                  <div className="c-box__filter-moderator u-small-margin-right u-display-flex u-justify-content-center u-align-items-center">
                  <NavLink to="/moderatorNotification" activeClassName="selected" activeStyle={{color: "black"
                     }}>
                      <img src= {bigpen} alt=""  className="c-box_moderator-img u-smallx-margin-right"/>
                      <span className="u-smallx-margin-right">1</span>
                      <span className="c-box_moderator-titile">بررسی</span>
                 </NavLink>
                  </div>
                </div>                                           
            </div>
            <div className="c-box_moderator-content u-small-padding-horizontal">
      <div className="c-box_moderator-border u-small-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column">
      <div className="u-display-flex u-flex-row u-small-margin-bottom u-align-items-center u-justify-content-between">
        <div className="u-display-flex u-flex-row u-align-items-center u-flex-wrap">
          <ButtonToolbar>
              {['left'].map(placement => (
                  <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  rootClose={true}
                  overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Content>
                      <div className="u-display-flex u-align-items-center">
                          <div className="u-display-flex u-flex-row">
                              <img className="c-header__info-icon" src={avatar} width="35px" height="35px"/>
                              <p className="u-small-margin-top u-small-margin-right"><b>Del_eng20</b></p>
                          </div> 
                      </div> 
                      <div className="u-display-flex">
                          <div className="u-popover-padding__left">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={xp} width="25px" height="25px"/>
                              <p>امتیازات</p>
                            </div>
                            <b>۱۰۲</b>
                          </div>
                          <div className="u-popover-padding__left">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={heart} width="20px" height="20px"/>
                              <p>تشکر</p>
                            </div>
                            <b>۹۳</b>
                          </div>
                          <div className="u-popover-padding">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={tickGray} width="20px" height="20px"/>
                              <p>جواب ها</p>
                            </div>
                            <b>۵۶</b>
                          </div>
                      </div>
                      </Popover.Content>
                      </Popover>
                  }
                  >
                  <a variant="secondary">
                      <img src={avatar} className="u-medium-margin-left"/>
                  </a>
                  </OverlayTrigger>
              ))}
              
          </ButtonToolbar>
          <h4 className="u-h4-font-size u-small-margin-left u-no-margin"> نوع مقطع / </h4>
          <h4 className="u-h4-font-size u-small-margin-right u-no-margin"> موضوع درسی /&nbsp;&nbsp;</h4>
          <h4 className="c-box__moderator-text u-h4-font-size u-small-margin-left u-no-margin u-small-padding-vertical u-smallx-padding-horizontal" >اولین سوال </h4>
         
        </div>
        <img src={diff} />
      </div>
      <div className="c-box_moderator-border u-display-flex u-flex-row o-content-editor u-small-margin-top">
         <img src={bigflag} className="c-box_img-moderator"/>
         <p className="u-medium-line-height u-small-padding-vertical">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  <a className = "c-Filter__span">ادامه...</a></p>

      </div>
      </div>
      <div className="c-box_moderator-border u-small-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column">
      <div className="u-display-flex u-flex-row u-small-margin-bottom u-align-items-center u-justify-content-between">
        <div className="u-display-flex u-flex-row u-align-items-center u-flex-wrap">
          <ButtonToolbar>
              {['left'].map(placement => (
                  <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  rootClose={true}
                  overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Content>
                      <div className="u-display-flex u-align-items-center">
                          <div className="u-display-flex u-flex-row">
                              <img className="c-header__info-icon" src={avatar} width="35px" height="35px"/>
                              <p className="u-small-margin-top u-small-margin-right"><b>Del_eng20</b></p>
                          </div> 
                      </div> 
                      <div className="u-display-flex">
                          <div className="u-popover-padding__left">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={xp} width="25px" height="25px"/>
                              <p>امتیازات</p>
                            </div>
                            <b>۱۰۲</b>
                          </div>
                          <div className="u-popover-padding__left">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={heart} width="20px" height="20px"/>
                              <p>تشکر</p>
                            </div>
                            <b>۹۳</b>
                          </div>
                          <div className="u-popover-padding">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={tickGray} width="20px" height="20px"/>
                              <p>جواب ها</p>
                            </div>
                            <b>۵۶</b>
                          </div>
                      </div>
                      </Popover.Content>
                      </Popover>
                  }
                  >
                  <a variant="secondary">
                      <img src={avatar} className="u-medium-margin-left"/>
                  </a>
                  </OverlayTrigger>
              ))}
              
          </ButtonToolbar>
          <h4 className="u-h4-font-size u-small-margin-left u-no-margin"> نوع مقطع / </h4>
          <h4 className="u-h4-font-size u-small-margin-right u-no-margin"> موضوع درسی /&nbsp;&nbsp;</h4>
          <h4 className="c-box__moderator-text u-h4-font-size u-small-margin-left u-no-margin u-small-padding-vertical u-smallx-padding-horizontal" >اولین سوال </h4>
         
        </div>
        <img src={diff} />
      </div>
      <div className="c-box_moderator-border u-display-flex u-flex-row o-content-editor u-small-margin-top">
         <img src={redflag} className="c-box_img-moderator"/>
         <p className="u-medium-line-height u-small-padding-vertical">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  <a className = "c-Filter__span">ادامه...</a></p>

      </div>
      </div>
      <div className="c-box_moderator-border u-small-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column">
      <div className="u-display-flex u-flex-row u-small-margin-bottom u-align-items-center u-justify-content-between">
        <div className="u-display-flex u-flex-row u-align-items-center u-flex-wrap">
          <ButtonToolbar>
              {['left'].map(placement => (
                  <OverlayTrigger
                  trigger="click"
                  key={placement}
                  placement={placement}
                  rootClose={true}
                  overlay={
                      <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Content>
                      <div className="u-display-flex u-align-items-center">
                          <div className="u-display-flex u-flex-row">
                              <img className="c-header__info-icon" src={avatar} width="35px" height="35px"/>
                              <p className="u-small-margin-top u-small-margin-right"><b>Del_eng20</b></p>
                          </div> 
                      </div> 
                      <div className="u-display-flex">
                          <div className="u-popover-padding__left">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={xp} width="25px" height="25px"/>
                              <p>امتیازات</p>
                            </div>
                            <b>۱۰۲</b>
                          </div>
                          <div className="u-popover-padding__left">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={heart} width="20px" height="20px"/>
                              <p>تشکر</p>
                            </div>
                            <b>۹۳</b>
                          </div>
                          <div className="u-popover-padding">
                            <div className="u-display-flex">
                              <img className="c-header__info-icon u-small-margin-left" src={tickGray} width="20px" height="20px"/>
                              <p>جواب ها</p>
                            </div>
                            <b>۵۶</b>
                          </div>
                      </div>
                      </Popover.Content>
                      </Popover>
                  }
                  >
                  <a variant="secondary">
                      <img src={avatar} className="u-medium-margin-left"/>
                  </a>
                  </OverlayTrigger>
              ))}
              
          </ButtonToolbar>
          <h4 className="u-h4-font-size u-small-margin-left u-no-margin"> نوع مقطع / </h4>
          <h4 className="u-h4-font-size u-small-margin-right u-no-margin"> موضوع درسی /&nbsp;&nbsp;</h4>
          <h4 className="c-box__moderator-text u-h4-font-size u-small-margin-left u-no-margin u-small-padding-vertical u-smallx-padding-horizontal" >اولین سوال </h4>
         
        </div>
        <img src={diff} />
      </div>
      <div className="c-box_moderator-border u-display-flex u-flex-row o-content-editor u-small-margin-top">
         <img src={bigflag} className="c-box_img-moderator"/>
         <p className="u-medium-line-height u-small-padding-vertical">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.  <a className = "c-Filter__span">ادامه...</a></p>

      </div>
      </div>
      
    </div>  
  </div>                   

    );
};
export default QuestionModerators;