import React from 'react';
import QuestionBox from '../Common/QuestionBox';

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
      {props.data.length > 0
        ? props.data.map(item => {
            return (
              <QuestionBox
                deleteBookmark={props.deleteBookmark}
                canDeleteBookmark={props.canDeleteBookmark}
                data={item}
                key={item._id}
              />
            );
          })
        : null}

      {/* <div className="c-pagination u-medium-margin-vertical u-display-flex u-flex-row u-align-items-center u-justify-content-center">
             <a href="" className="c-pagination__btn">
                <i className="fa fa-chevron-right"></i>
            </a>
            <ul>
                <li>
                    <span>1</span>
                </li>
                <li>
                    <a href="">2</a>
                </li>
                <li>
                    <a href="">2</a>
                </li>
                <li>
                    <a href="">2</a>
                </li>
                <li>
                    <a href="">2</a>
                </li>
                <li>
                    <a href="">2</a>
                </li>
                <li>
                    <a href="">2</a>
                </li>
                <li>
                    <a href="">2</a>
                </li>                
            </ul>
            <a href="" className="c-pagination__btn">
                <i className="fa fa-chevron-left"></i>
            </a>
        </div> */}
    </div>
  );
};

export default QuestionList;
