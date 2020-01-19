import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import avatar from '../../assets/img/Question/Group 308.svg';
import easy from '../../assets/img/Question/Difficult1.svg';
import medium from '../../assets/img/Question/Difficult2.svg';
import hard from '../../assets/img/Question/Difficult3.svg';
import timerLow from '../../assets/img/Question/Time3.svg';
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import avatar2 from '../../assets/img/Question/Group 357.svg';
import heart from '../../assets/img/Header/heart.png';
import xp from '../../assets/img/Header/king.png';
import tickGray from '../../assets/img/Header/tick-gray.png';
import AddReport from '../../components/Questions/AddReport';
import renderHTML from 'react-render-html';

import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton, OverlayTrigger, Popover } from 'react-bootstrap';
const QuestionBox = props => {
  debugger;
  let difficaltyIcon = null;

  if (props.data.difficalty === 'easy') {
    difficaltyIcon = easy;
  } else if (props.data.difficalty === 'medium') {
    difficaltyIcon = medium;
  } else {
    difficaltyIcon = hard;
  }

  let now = moment().unix() * 1000;
  let createDate = moment.unix(Number(props.data.created_at));
  let createDuration = createDate.diff(now, 'days', true);
  createDuration = Math.round(createDuration);
  // console.log(Math.round(createDuration));

  let startDate = moment().unix() * 1000;
  let endDate = moment.unix(Number(props.data.lifecycle));
  let remainHrs = endDate.diff(startDate, 'days', true);
  // console.log(Math.round(remainHrs));

  let timeIcon = null;
  // console.log(createDuration);
  if (createDuration == 0 || createDuration == -2 || createDuration == -1) {
    timeIcon = timerFull;
  } else if (remainHrs > 1) {
    timeIcon = timerMedium;
  } else {
    timeIcon = timerLow;
  }

  let canDeleteBookmark = props.canDeleteBookmark ? (
    <a
      class='fa fa-trash u-danger-color u-h4-font-size u-small-margin-right'
      dideo-checked='true'
      onClick={e => props.deleteBookmark(props.data._id)}
    ></a>
  ) : null;

  return (
    <div className='u-medium-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column c-box u-medium-margin-top'>
      <div className='u-display-flex u-flex-row u-small-margin-bottom u-align-items-center u-justify-content-between'>
        <div className='u-display-flex u-flex-row u-align-items-center'>
          <ButtonToolbar>
            {['left'].map(placement => (
              <OverlayTrigger
                trigger='click'
                key={placement}
                placement={placement}
                rootClose={true}
                overlay={
                  <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Content>
                      <div className='u-display-flex u-align-items-center'>
                        <div className='u-display-flex u-flex-row'>
                          <img
                            className='c-header__info-icon'
                            src={props.data.user.avatar}
                            width='35px'
                            height='35px'
                          />
                          <p className='u-small-margin-top u-small-margin-right'>
                            <b>{props.data.user.username}</b>
                          </p>
                        </div>
                      </div>
                      <div className='u-display-flex'>
                        <div className='u-popover-padding__left'>
                          <div className='u-display-flex'>
                            <img
                              className='c-header__info-icon u-small-margin-left'
                              src={xp}
                              width='25px'
                              height='25px'
                            />
                            <p>امتیازات</p>
                          </div>
                          <b>{props.data.user.rank}</b>
                        </div>
                        <div className='u-popover-padding__left'>
                          <div className='u-display-flex'>
                            <img
                              className='c-header__info-icon u-small-margin-left'
                              src={heart}
                              width='20px'
                              height='20px'
                            />
                            <p>تشکر</p>
                          </div>
                          <b>۹۳</b>
                        </div>
                        <div className='u-popover-padding'>
                          <div className='u-display-flex'>
                            <img
                              className='c-header__info-icon u-small-margin-left'
                              src={tickGray}
                              width='20px'
                              height='20px'
                            />
                            <p>جواب ها</p>
                          </div>
                          <b>۵۶</b>
                        </div>
                      </div>
                    </Popover.Content>
                  </Popover>
                }
              >
                <a variant='secondary'>
                  <img src={props.data.user.avatar} className='u-medium-margin-left' />
                </a>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
          <h4 className='u-h4-font-size u-small-margin-left u-no-margin'>{props.data.subject.name}</h4>.
          <h4 className='u-h4-font-size u-small-margin-right u-no-margin'>{props.data.title}</h4>
        </div>
        <img src={difficaltyIcon} />
      </div>
      <div className='o-content-editor u-small-margin-top'>
        <p className='u-medium-line-height'>{renderHTML(props.data.description)}</p>
      </div>
      <div className='u-display-flex u-flex-row u-small-margin-top u-align-items-center u-justify-content-between'>
        <div className='u-display-flex u-flex-row u-align-items-center'>
          <img height='25' src={timeIcon} className='u-medium-margin-left' />
          <img height='30' src={avatar2} className='u-medium-margin-left' />
          {canDeleteBookmark}
        </div>
        <Link className='c-btn c-btn--primary' to={'/question/' + props.data._id}>
          پاسخ
        </Link>
      </div>
    </div>
  );
};

export default QuestionBox;
