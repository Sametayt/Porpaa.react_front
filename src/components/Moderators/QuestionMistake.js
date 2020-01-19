import React            from 'react';
import bigflag          from '../../assets/img/Moderator/bigflag.png.png';
import flag             from '../../assets/img/Moderator/flag.png.png';
import redflag          from '../../assets/img/Moderator/redflag.png.png';
import bigpen           from '../../assets/img/Moderator/bigpen.png.png';
import diff             from '../../assets/img/Moderator/diff.png.png';
import gift             from '../../assets/img/Moderator/gift.png.png';
import pen              from '../../assets/img/Moderator/pen.png.png';
import smallflag        from '../../assets/img/Moderator/smallflag.png.png';
import window           from '../../assets/img/Moderator/window.png.png';
import wonder          from '../../assets/img/Moderator/wonder.png.png';
import avatar           from '../../assets/img/Question/Group 308.svg';
import difficulty       from '../../assets/img/Question/Difficult2.svg';
import timerLow         from '../../assets/img/Question/Time3.svg';
import timerFull        from '../../assets/img/Question/Time1.svg';
import timerMedium      from '../../assets/img/Question/Time2.svg';
import avatar2          from '../../assets/img/Question/Group 357.svg';
import heart            from '../../assets/img/Header/heart.png';
import xp               from '../../assets/img/Header/king.png';
import tickGray         from '../../assets/img/Header/tick-gray.png';
import FilterProfile    from '../../components/Profiles/FilterProfileQuestions';
import AddReport        from '../../components/Questions/AddReport';

import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton, OverlayTrigger, Popover,Dropdown } from 'react-bootstrap';


const QuestionMistake = (props) => {
    return (
        <div className="u-medium-margin-top">
            <div className="u-display-flex u-flex-row u-justify-content-center">
            <button className={"c-header_moderator-parent u-smallx-margin-left " + props.state.disabledNext} onClick={(e) => props.changeStep(props.state.index,'next') } disabled={props.state.disabledNext}>
               <i class="fa fa-chevron-right c-header_arrow-icon"></i>
            </button>
            <button className="c-header_moderator-parent" onClick={(e) => props.changeStep(props.state.index,'prev') } disabled={props.state.disabledPrev}>
               <i class="fa fa-chevron-left c-header_arrow-icon"></i>
            </button>
            </div>
            <div className="c-box_moderator-content u-smallx-margin-top u-smallx-padding-vertical u-smallx-padding-horizontal">
            <div className="u-display-flex u-flex-column">
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
      <div className="c-box_moderator-border u-display-flex u-flex-column o-content-editor u-small-margin-top">
         <p className="u-medium-line-height u-small-padding-vertical">{
           props.state.currentStep && props.state.currentStep.description 
          ?  props.state.currentStep.description
          : ""
           
           }</p>
         <div className="u-display-flex u-flex-row u-small-margin-top u-align-items-center u-justify-content-between">
        <div className="u-display-flex u-flex-row u-justify-content-between u-full-width u-smallx-margin-bottom">
         <div className="">
          <img height="30" src={avatar2} className="" />
          <img height="30" src={avatar2} className="" />
         </div>
        <img height="25" src={gift} className="" />

        </div>
        {/* <Link className="c-btn c-btn--primary" to='/'>
          پاسخ
        </Link> */}
      </div>
      </div>

      </div>
                <div className="c-tags_moderator u-display-flex u-flex-row u-small-padding-bottom u-medium-padding-top">
                    <img src={avatar2} alt="" className="c-tags_moderator-img u-smallx-margin-left u-position-relative"/>
                    <span className="u-bold-weight">موضوعات اشتباه است / &nbsp;&nbsp;</span>
                    <span className="u-bold-weight">2 ساعت پیش </span>
                </div>
                <div className="c-tags_moderator u-display-flex u-flex-row u-small-padding-bottom u-medium-padding-top">
                    <img src={avatar2} alt="" className="c-tags_moderator-img u-smallx-margin-left u-position-relative"/>
                    <span className="u-bold-weight">  نوشته توهین آمیز / &nbsp;&nbsp;</span>
                    <span className="u-bold-weight">  20 دقیقه پیش </span>
                </div>



    <div className="o-row c-filter_dropdown-parent-moderator u-display-flex u-flex-row">
      <Dropdown className="o-col-md-4 o-col-sm-6 u-medium-margin-top u-medium-padding-bottom dropdown">
        <Dropdown.Toggle variant="link" className="c-filter__dropdown w-100" id="dropdown-basic">
          <span>موضوع اصلی</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="u-medium-padding-vertical u-medium-padding-horizontal c-filter__dropdown-list-moderators1"></Dropdown.Menu>
      </Dropdown>

      <Dropdown className="o-col-md-4 o-col-sm-6 u-medium-margin-top u-medium-padding-bottom dropdown">
        <Dropdown.Toggle variant="link" className="c-filter__dropdown w-100" id="dropdown-basic">
           موضوع پیشنهادی
        </Dropdown.Toggle>
        <Dropdown.Menu className="u-medium-padding-vertical u-medium-padding-horizontal c-filter__dropdown-list-moderators2"></Dropdown.Menu>

      </Dropdown>`
    </div>

    <div className=" u-medium-padding-vertical">
      <h5 className="u-medium-padding-horizontal">پیشنهاد تصحیح</h5>
      <div className="c-box_moderator-answer-dropdown u-display-flex u-flex-row">
        <p className="u-small-padding-horizontal u-small-padding-vertical u-large-line-height"> سوال مربوط به این بخش است<span className="c-box_modaretor-1">  سقراطی  &nbsp;&nbsp;</span><span className="c-box_modaretor-2"> استقرایی &nbsp;</span>
        تولید متن ساختگی است.  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
        . چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
      </div>
      <div class="alert alert-primary u-medium-margin-top c-box_moderator--alert" role="alert">
        <i className="fa fa-info-circle"></i> فقط کلماتی که رنگ آنها سبز هستند در پست شماره 27 نمایش داده شوند
      </div>
    </div>
<hr/>

              <div className="">
                <div className="u-display-flex u-flex-row u-smallx-margin-right">
                  <img src={pen} alt="" className="c-box_img-moderator-pen"/>
                  <h5 className="u-medium-margin-top u-small-margin-right">نتیجه ی بررسی</h5>
                </div>
                {/* <div className="u-display-flex u-flex-row u-justify-content-center">
                  <div className="u-medium-margin-right">
                    <button type="button" class="c-btn--green u-large-padding-horizontal u-display-flex u-flex-row u-align-items-center">
                    <i class="fa fa-check"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">تایید</p>
                    </button>
                  </div>
                  <div className="u-medium-margin-right">
                    <button type="button" class="c-btn--red u-large-padding-horizontal u-display-flex u-flex-row u-align-items-center">
                    <i class="fa fa-times"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">رد</p>
                    </button>
                  </div>
                  <div className="u-medium-margin-right">
                    <button type="button" class="c-btn--blue u-large-padding-horizontal u-display-flex u-flex-row u-align-items-center">
                    <i class="fa fa-share"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">پاس</p>
                    </button>
                  </div>
                  <div className="u-medium-margin-right">
                    <button type="button" class="c-btn--pale-blue u-large-padding-horizontal u-display-flex u-flex-row u-align-items-center">
                    <i class="fa fa-pencil"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">ویرایش</p>
                    </button>
                  </div>
                </div> */}

                <div className="o-row u-display-flex u-flex-row u-align-items-center">
                  <div className="o-col-md-3 o-col-sm-6 u-display-flex u-justify-content-center mb-2">
                    <button type="button" class="c-btn--green u-display-flex u-flex-row u-align-items-center u-justify-content-center w-100">
                    <i class="fa fa-check"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">تایید</p>
                    </button>
                  </div>

                  <div className="o-col-md-3 o-col-sm-6 u-display-flex u-justify-content-center mb-2">
                  <button type="button" class="c-btn--red u-display-flex u-flex-row u-align-items-center u-justify-content-center w-100">
                    <i class="fa fa-times"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">رد</p>
                    </button>
                  </div>

                  <div className="o-col-md-3 o-col-sm-6 u-display-flex u-justify-content-center mb-2">
                  <button type="button" class="c-btn--blue u-display-flex u-flex-row u-align-items-center u-justify-content-center w-100">
                    <i class="fa fa-share"></i>
                    <p className="u-smallx-margin-top u-small-margin-right">پاس</p>
                    </button>
                  </div>

                  <div className="o-col-md-3 o-col-sm-6 u-display-flex u-justify-content-center mb-2">
                    <button type="button" class="c-btn--pale-blue u-display-flex u-flex-row u-align-items-center u-justify-content-center w-100">
                      <i class="fa fa-pencil"></i>
                      <p className="u-smallx-margin-top u-small-margin-right">ویرایش</p>
                    </button>
                  </div>


                </div>
                <div className="u-display-flex u-flex-row u-medium-margin-top u-flex-wrap">
                  <div className="o-col-lg-6 o-col-md-12">
                    <div className="c-box_moderator--input u-display-flex">
                      <input type="radio" name="selectradio" id="radiomoderator"/>
                      <label htmlFor="radiomoderator"> یکی رو میشناسم که بهش پاس بدم </label>
                    </div>
                    <div className="c-box_moderator--input u-display-flex">
                      <input type="radio" name="selectradio"  id="radiomoderator2"/>
                      <label htmlFor="radiomoderator2"> به انتخاب پرپا </label>
                    </div>
                  </div>
                  <div className="o-col-lg-4 o-col-md-12">

                    <form class="c-header-search c-box_moderator--search">
                        <div className="c-box_moderator--hover">
                            <div className="u-display-flex u-justify-content-between u-align-items-center u-medium-padding-horizontal u-small-padding-vertical">
                              <div className="c-box_moderator--hovertext">
                                  <span>نام یک نفر</span>
                              </div>
                              <button className="c-btn c-btn--outline c-btn--small"> <i className="fa fa-share"></i> پاس </button>
                            </div>
                            <div className="u-display-flex u-justify-content-between u-align-items-center u-medium-padding-horizontal u-small-padding-vertical">
                              <div className="c-box_moderator--hovertext">
                                  <span>نام یک نفر</span>
                              </div>
                              <button className="c-btn c-btn--outline c-btn--small"> <i className="fa fa-share"></i> پاس </button>
                            </div>
                            <div className="u-display-flex u-justify-content-between u-align-items-center u-medium-padding-horizontal u-small-padding-vertical">
                              <div className="c-box_moderator--hovertext">
                                  <span>نام یک نفر</span>
                              </div>
                              <button className="c-btn c-btn--outline c-btn--small"> <i className="fa fa-share"></i> پاس </button>
                            </div>
                          </div>
                        <input type="text" class="c-header-searchFriend__input" placeholder="نام"/>
                        <i class="fa fa-search c-header-searchFriend__icon"></i>
                    </form>

                  </div>
                </div>
                <div className="u-medium-margin-top">
                    <div className="o-col-lg-6 o-col-md-12">
                        <div className="c-box_moderator--input u-display-flex">
                          <input type="radio" name="selectradio1" id="radiomoderator3"/>
                          <label htmlFor="radiomoderator3"> خیلی جدی نبود </label>
                        </div>
                        <div className="c-box_moderator--input u-display-flex">
                          <input type="radio" name="selectradio1"  id="radiomoderator4"/>
                          <label htmlFor="radiomoderator4">  درخواست اخطار </label>
                        </div>
                      </div>

                </div>
              </div>
            </div>
        </div>
    );
}
export default QuestionMistake;