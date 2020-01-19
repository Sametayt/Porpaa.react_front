import React from 'react';
import AnswerItem from '../Common/AnswerItem';

const options = {
  initialIndex: 0,
  groupCells: false,
  groupCells: 3,
  pageDots: false,
  arrows: true,
  draggable: 1
};
const AnswerList = props => {
  return (
    <div className='u-medium-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column c-box u-medium-margin-top'>
      <h4 className='u-h4-font-size u-semibold-weight u-small-margin-bottom'>پاسخ ها</h4>
      {props.data.answers ? (
        props.data.answers.map((item, index) => {
          return (
            <AnswerItem
              key={index}
              validated={props.validated}
              addComment={props.addComment}
              data={item}
              likeAnswer={props.likeAnswer}
              toggleReport={props.toggleReport}
              answers={props.data}
              isME={item.user._id === props.currentUser._id ? 'ME' : 'notME'}
              currentUser={props.currentUser}
              // permission={props.permission}
              // owner={props.owner}
              changeStatus={props.changeStatus}
            />
          );
        })
      ) : (
        <p className='u-display-flex u-flex-row u-justify-content-center u-gray-text-color'>
          پاسخی برای نمایش وجود ندارد
        </p>
      )}
    </div>
  );
};

export default AnswerList;
