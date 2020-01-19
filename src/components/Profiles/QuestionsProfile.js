import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/img/Question/Group 308.svg';
import difficulty from '../../assets/img/Question/Difficult2.svg';
import timerLow from '../../assets/img/Question/Time3.svg';
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import avatar2 from '../../assets/img/Question/Group 357.svg';
import heart from '../../assets/img/Header/heart.png';
import xp from '../../assets/img/Header/king.png';
import tickGray from '../../assets/img/Header/tick-gray.png';
import AddReport from '../../components/Questions/AddReport';
import FilterProfileQuestions from './FilterProfileQuestions';
import QuestionList from '../../components/Questions/QuestionList';

import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton, OverlayTrigger, Popover } from 'react-bootstrap';

const QuestionBox = props => {
  return (
    <div className="o-container">
      <FilterProfileQuestions partials={props.partials} filterQuestions={props.filterQuestions} />
      <QuestionList data={props.data} />
    </div>
  );
};

export default QuestionBox;
