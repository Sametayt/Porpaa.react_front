import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/Question/Group 308.svg';
import difficulty from '../../assets/img/Question/Difficult2.svg';
import timerLow from '../../assets/img/Question/Time3.svg';
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import avatar2 from '../../assets/img/Question/Group 357.svg';
import ability from '../../ability';

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'code', 'strike', 'size', 'direction'],
    ['script'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['image'],
    ['formula']
  ]
};
const AnswerBoxSingle = props => {
  return (
    <div className='u-medium-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column c-box'>
      <div className='u-display-flex u-flex-row u-small-margin-bottom u-align-items-center u-justify-content-between'>
        <h4 className='u-h4-font-size u-small-margin-left u-no-margin'>پاسخ به سوال</h4>
      </div>

      <div className='u-medium-padding-horizontal u-medium-padding-vertical c-answerbox u-clearfix'>
        {ability.can('Add', 'Answer') ? (
          <section>
            <div className='u-display-flex u-flex-row u-align-items-center u-medium-margin-bottom'>
              <img src={props.currentUser.avatar ? props.currentUser.avatar : null} className='u-small-margin-left' />
              <h4 className='u-h5-font-size  u-no-margin'>
                {props.currentUser.firstName ? props.currentUser.firstName : null}{' '}
                {props.currentUser.lastName ? props.currentUser.lastName : null}
              </h4>
            </div>
            <div>
              <ReactQuill onChange={props.handleChange} theme='snow' modules={quillModules} />
              <a onClick={e => props.click(e)} className='c-btn c-btn--secondary u-medium-margin-top u-pull-left'>
                جوابت رو بفرست
              </a>
            </div>
          </section>
        ) : (
          <div className='u-display-flex u-flex-column u-align-items-center u-justify-content-center u-medium-padding-vertical'>
            <h3 className='u-h4-font-size'>برای پاسخ دادن ابتدا وارد حساب کاربری خود شوید</h3>
            <Link className='c-btn c-btn--primary' to='/login'>
              ورود به حساب کاربری
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerBoxSingle;
