import React from 'react';
import moment from 'moment';
import avatar from '../../assets/img/Question/Group 308.svg';
import easy from '../../assets/img/Question/Difficult1.svg';
import medium from '../../assets/img/Question/Difficult2.svg';
import hard from '../../assets/img/Question/Difficult3.svg';
import timerLow from '../../assets/img/Question/Time3.svg';
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import avatar2 from '../../assets/img/Question/Group 357.svg';
import renderHTML from 'react-render-html';
import Can from '../../Can';
const QuestionBoxSingle = props => {
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
  console.log(createDuration);
  if (createDuration == 0 || createDuration == -2 || createDuration == -1) {
    timeIcon = timerFull;
  } else if (remainHrs > 1) {
    timeIcon = timerMedium;
  } else {
    timeIcon = timerLow;
  }

  return (
    <div className='u-medium-padding-horizontal u-medium-margin-bottom u-medium-padding-vertical u-display-flex u-flex-column c-box'>
      <div className='u-display-flex u-flex-row u-small-margin-bottom u-align-items-center u-justify-content-between'>
        <div className='u-display-flex u-flex-row u-align-items-center'>
          <img src={props.data.user.avatar} className='u-medium-margin-left' />
          <h4 className='u-h4-font-size u-small-margin-left u-no-margin'>{props.data.subject.name}</h4>.
          <h4 className='u-h4-font-size u-small-margin-right u-no-margin'>{props.data.title}</h4>
        </div>

        <img src={difficaltyIcon} />
      </div>
      <div className='o-content-editor u-small-margin-top'>
        <p className='u-medium-line-height'>{renderHTML(props.data.description)} </p>
      </div>
      <div className='u-display-flex u-flex-row u-small-margin-top u-align-items-center u-justify-content-between'>
        <div className='u-display-flex u-flex-row u-align-items-center'>
          <img height='25' src={timeIcon} className='u-medium-margin-left' />
          <img height='30' src={avatar2} className='u-medium-margin-left' />
        </div>
        <div className='u-display-flex u-flex-column'>
          <ul className='c-tags u-display-flex u-flex-row u-flex-wrap'>
            {props.data.tags.length > 0
              ? props.data.tags.map(value => {
                  return (
                    <li className='u-small-margin-left'>
                      <a href='#'>{value.name}</a>
                    </li>
                  );
                })
              : null}
          </ul>
          {/* {props.permission ? ( */}
          <Can I='View' a='Question-Icons'>
            <ul className='u-display-flex u-flex-row u-align-items-center u-medium-margin-top u-justify-content-center'>
              <li className='u-small-margin-horizontal'>
                <a href='#' className='u-secondary-text-color u-h4-font-size' onClick={props.toggleRequestModal}>
                  <i className='fa fa-user' />
                </a>
              </li>
              <li className='u-small-margin-horizontal'>
                <a href='#' className='u-secondary-text-color u-h4-font-size' onClick={e => props.toggleEditModal(e)}>
                  <i className='fa fa-edit' />
                </a>
              </li>
              <li className='u-small-margin-horizontal'>
                <a href='#' className='u-secondary-text-color u-h4-font-size'>
                  <i className='fa fa-share-alt' />
                </a>
              </li>
              <li className='u-small-margin-horizontal'>
                <a
                  href='#'
                  onClick={() => props.like(props.data._id)}
                  className='u-secondary-text-color u-h4-font-size u-small-margin-left'
                >
                  <i className='fa fa-heart' />
                </a>
                <span className='u-primary-text-color u-h5-font-size'>{props.data.likers.length}</span>
              </li>
              <li className='u-small-margin-horizontal'>
                <a
                  href='#'
                  className='u-secondary-text-color u-h4-font-size'
                  onClick={e => props.toggleReport(e, null, 'question')}
                >
                  <i className='fa fa-flag' />
                </a>
              </li>
              <li className='u-small-margin-horizontal'>
                <a
                  href='#'
                  className='u-secondary-text-color u-h4-font-size '
                  onClick={e => props.bookmark(e, props.data._id)}
                >
                  <i className='fa fa-star' />
                </a>
              </li>
              <li className='u-small-margin-horizontal'>
                <a
                  href='#'
                  className='u-secondary-text-color u-h4-font-size '
                  onClick={e => props.togglePlayListModal(e)}
                >
                  <i className='fa fa-play' />
                </a>
              </li>
            </ul>
          </Can>
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default QuestionBoxSingle;
