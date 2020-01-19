import React from 'react';
import { Form } from 'react-bootstrap';
import avatar from '../../assets/img/Question/Group 308.svg';
import difficulty from '../../assets/img/Question/Difficult2.svg';
import timerLow from '../../assets/img/Question/Time3.svg';
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import avatar2 from '../../assets/img/Question/Group 357.svg';
import renderHTML from 'react-render-html';
import Can from '../../Can';
import ability from '../../ability';

const AnswerItem = props => {
  let Comment = {
    author: props.isME,
    __type: 'Comment'
  };

  let answerId = null;
  props.data._id ? (answerId = props.data._id) : (answerId = null);
  return (
    <div className='u-medium-padding-horizontal u-horizontal-center u-medium-padding-vertical u-display-flex u-flex-column c-box u-medium-margin-top c-answer-item rightAnswer'>
      <div className='u-display-flex u-flex-row'>
        <div className='u-display-flex u-flex-column u-small-margin-bottom u-align-items-center u-justify-content-center'>
          <div className='u-display-flex u-small-margin-bottom u-flex-row u-align-items-center u-justify-content-center'>
            <img src={props.data.user.avatar} />
          </div>
        </div>
        <div className='o-content-editor u-small-margin-top u-horizontal-right u-medium-margin-right'>
          <h5 className='u-h5-font-size u-medium-margin-bottom'>
            {props.data.user.firstName} {props.data.user.lastName}
          </h5>
          <p className='u-medium-line-height'>{renderHTML(props.data.description)}</p>
        </div>
      </div>
      {/* {props.permission ? ( */}
      <Can do='Modify' on={Comment}>
        <div className='u-display-flex u-flex-row u-align-items-center justify-content-between u-medium-margin-bottom'>
          <a href='#' className='c-btn c-btn--outline c-btn--rounded u-medium-margin-right'>
            نظرات ({props.data.comments.length})
          </a>
          <div className=''>
            <a
              onClick={e => props.toggleReport(e, answerId, 'answer')}
              href='#'
              className='u-primary-text-color u-h4-font-size u-small-margin-vertical u-small-margin-right'
            >
              <i className='fa fa-flag' />
            </a>
            <a
              href='#'
              onClick={e => props.likeAnswer(e, answerId)}
              className='u-primary-text-color u-h4-font-size u-medium-margin-right u-smallx-margin-left'
            >
              <span className='u-primary-text-color u-h5-font-size u-small-margin-left'>{props.data.likes}</span>
              <i className='fa fa-heart' />
            </a>

            {/* {props.owner ? ( */}
            <Can I='Verify' a='Comment'>
              <a
                href='#'
                onClick={e => props.changeStatus(e, props.data.question, 'accepted')}
                className='c-btn c-btn--primary c-btn--small u-small-margin-right u-light-text-color u-small-margin-bottom'
              >
                تایید جواب
              </a>
            </Can>
            {/* ) : null} */}

            {/* {props.owner ? ( */}
            <Can I='Reject' a='Comment'>
              <a
                href='#'
                onClick={e => props.changeStatus(e, props.data.question, 'rejected')}
                className='c-btn c-btn--primary c-btn--outline c-btn--small u-small-margin-right u-light-text-color u-small-margin-bottom'
              >
                رد کردن جواب
              </a>
            </Can>
            {/* ) : null} */}

            {/* {props.owner ? ( */}
            <Can I='Report' a='Comment'>
              <a
                href='#'
                onClick={e => props.changeStatus(e, props.data.question, 'reported')}
                className='c-btn c-btn--primary c-btn--outline c-btn--small u-small-margin-right u-light-text-color u-small-margin-bottom'
              >
                reported
              </a>
            </Can>
            {/* ) : null} */}

            {/* {props.owner ? ( */}
            <Can I='Normal' a='Comment'>
              <a
                href='#'
                onClick={e => props.changeStatus(e, props.data.question, 'normal')}
                className='c-btn c-btn--primary c-btn--outline c-btn--small u-small-margin-right u-light-text-color u-small-margin-bottom'
              >
                normal
              </a>
            </Can>
            {/* ) : null} */}
          </div>
        </div>
        {/* ) : null} */}
      </Can>

      <div className='u-display-flex u-flex-column c-answer__comment-list u-medium-padding-horizontal u-medium-padding-vertical'>
        {props.data.comments
          ? props.data.comments.map(item => {
              return (
                <div
                  key={item._id}
                  className='u-display-flex u-flex-row u-align-items-center u-justify-content-between c-answer__comment-item'
                >
                  <div className='u-display-flex u-flex-row u-align-items-center'>
                    <img src={avatar} className='u-small-margin-left' />
                    <p className='u-no-margin'>{item.text}</p>
                  </div>

                  {/* {props.permission ? ( */}
                  <Can I='Report' a='CommentToAnswer'>
                    <a href='#' className='u-h4-font-size u-small-margin-vertical u-small-margin-right'>
                      <i className='fa fa-flag' onClick={e => props.toggleReport(e, answerId, 'answer_comment')} />
                    </a>
                  </Can>
                  {/* ) : null} */}
                </div>
              );
            })
          : null}
        {/* {props.permission ? ( */}
        <Can I='Add' a='CommentToAnswer'>
          <Form
            className='c-answer__add-comment u-medium-margin-vertical c-form'
            noValidate
            validated={props.validated}
            onSubmit={event => props.addComment(event, answerId, 'answer')}
          >
            <Form.Group className='u-no-margin'>
              <div className='u-display-flex u-flex-row u-align-items-center '>
                <img
                  src={props.currentUser.avatar ? props.currentUser.avatar : avatar}
                  className='u-small-margin-left'
                />
                <Form.Control
                  className='u-rounded u-light-bkg u-full-width'
                  type='text'
                  placeholder='نیاز به جزییات بیشتر داری ؟ بپرس'
                  required
                  name='comment'
                />
              </div>
              <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Can>
        {/* ) : null} */}
      </div>
    </div>
  );
};

export default AnswerItem;
