import React from 'react';
import QuestionBoxSingle from '../Common/QuestionBoxSingle';

const options = {
  initialIndex: 0,
  groupCells: false,
  groupCells: 3,
  pageDots: false,
  arrows: true,
  draggable: 1
};
const QuestionList = props => {
  return (
    <div>
      <QuestionBoxSingle
        toggleRequestModal={props.toggleRequestModal}
        togglePlayListModal={props.togglePlayListModal}
        // permission={props.permission}
        data={props.data}
        like={props.like}
        bookmark={props.bookmark}
        toggleEditModal={props.handleEditModal}
        toggleReport={props.toggleReport}
      />
    </div>
  );
};

export default QuestionList;
