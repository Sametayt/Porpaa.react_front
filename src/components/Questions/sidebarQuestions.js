import React from 'react';
import {
  Dropdown,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Form,
  Tooltip,
  Button,
  OverlayTrigger
} from 'react-bootstrap';
import renderHTML from 'react-render-html';

import timer5 from '../../assets/img/Question/Group 222.svg';
import timer4 from '../../assets/img/Question/Time1.svg';
import avatar from '../../assets/img/Question/Group 308.svg';
import timer3 from '../../assets/img/Question/Time2.svg';
import timer2 from '../../assets/img/Question/Group 225.svg';
import timer1 from '../../assets/img/Question/Group 226.svg';
import easy from '../../assets/img/Question/Difficult1.svg';
import medium from '../../assets/img/Question/Difficult2.svg';
import hard from '../../assets/img/Question/Difficult3.svg';

const sideBarQuestions = props => {
  return (
    <div className="u-large-padding-horizontal u-medium-padding-vertical u-display-flex u-flex-column c-box u-medium-margin-top">
      <div className="u-display-flex u-flex-column u-small-margin-bottom u-align-items-center u-justify-content-between">
        <div className="u-display-flex u-flex-column">
          <h3 className="u-display-flex u-flex-row u-justify-content-center"> سوالات متعارف</h3>
          <Form className=" u-smallx-padding-horizontal u-smallx-padding-vertical u-medium-margin-top u-medium-padding-horizontal u-rounded u-display-flex u-flex-row u-gray-bkg">
            {['top'].map(placement => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={<Tooltip id={`tooltip-top`}>طول عمر</Tooltip>}
              >
                <ButtonToolbar className="c-filter__checkbox u-small-margin-left">
                  <ToggleButtonGroup type="radio" name="duration" defaultValue={props.state.time}>
                    <ToggleButton
                      className="c-filter__checkbox-btn"
                      variant="low"
                      onClick={e => props.filter(e, 'time')}
                      itemvalue={1}
                      value="1"
                    >
                      <img src={timer5} />
                    </ToggleButton>
                    <ToggleButton
                      className="c-filter__checkbox-btn"
                      variant="medium"
                      onClick={e => props.filter(e, 'time')}
                      itemvalue={2}
                      value="2"
                    >
                      <img src={timer4} />
                    </ToggleButton>
                    <ToggleButton
                      className="c-filter__checkbox-btn"
                      variant="high"
                      onClick={e => props.filter(e, 'time')}
                      itemvalue={3}
                      value="3"
                    >
                      <img src={timer3} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </OverlayTrigger>
            ))}

            {['top'].map(placement => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={<Tooltip id={`tooltip-top`}>درجه سختی</Tooltip>}
              >
                <ButtonToolbar className="c-filter__checkbox">
                  <ToggleButtonGroup type="radio" name="difficulty" defaultValue={props.state.difficulty}>
                    <ToggleButton
                      itemvalue="easy"
                      className="c-filter__checkbox-btn"
                      variant="easy"
                      value="easy"
                      onClick={e => props.filter(e, 'difficulty')}
                    >
                      <img src={easy} />
                    </ToggleButton>
                    <ToggleButton
                      className="c-filter__checkbox-btn"
                      variant="medium"
                      itemvalue="medium"
                      value="medium"
                      onClick={e => props.filter(e, 'difficulty')}
                    >
                      <img src={medium} />
                    </ToggleButton>
                    <ToggleButton
                      itemvalue="hard"
                      className="c-filter__checkbox-btn"
                      variant="light"
                      value="hard"
                      onClick={e => props.filter(e, 'difficulty')}
                    >
                      <img src={hard} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </OverlayTrigger>
            ))}
          </Form>
          <div />
          <div className="u-display-flex u-flex-row u-medium-margin-top u-align-items-center">
            <img className="c-header__info-icon u-smallx-margin-left" src={avatar} width="35px" height="35px" />
            <h4 className="u-h4-font-size u-small-margin-left u-no-margin">Question</h4>
          </div>
          <div className="u-display-flex u-flex-row u-small-margin-top u-align-items-center u-justify-content-between">
            <div>5 ساعت مانده</div>
            <div class>
              <img height="25" src={timer3} className="u-small-margin-left" />
              <a
                href="#"
                className="c-btn c-btn--primary  c-btn--small u-smallx-padding-horizontal u-small-margin-left c-btn--rounded"
              >
                پاسخ
              </a>
            </div>
          </div>
          <div className="u-display-flex u-flex-row u-medium-margin-top u-align-items-center">
            <img className="c-header__info-icon u-smallx-margin-left" src={avatar} width="35px" height="35px" />
            <h4 className="u-h4-font-size u-small-margin-left u-no-margin">Question</h4>
          </div>
          <div className="u-display-flex u-flex-row u-small-margin-top u-align-items-center u-justify-content-between">
            <div>5 ساعت مانده</div>
            <div class>
              <img height="25" src={timer3} className="u-small-margin-left" />
              <a
                href="#"
                className="c-btn c-btn--primary c-btn--small u-smallx-padding-horizontal u-small-margin-left c-btn--rounded"
              >
                پاسخ
              </a>
            </div>
          </div>
          <div className="u-display-flex u-flex-row u-medium-margin-top u-align-items-center">
            <img className="c-header__info-icon u-smallx-margin-left" src={avatar} width="35px" height="35px" />
            <h4 className="u-h4-font-size u-small-margin-left u-no-margin">Question</h4>
          </div>
          <div className="u-display-flex u-flex-row u-small-margin-top u-align-items-center u-justify-content-between">
            <div>5 ساعت مانده</div>
            <div class>
              <img height="25" src={timer3} className="u-small-margin-left" />
              <a
                href="#"
                className="c-btn c-btn--primary c-btn--small u-smallx-padding-horizontal u-small-margin-left c-btn--rounded"
              >
                پاسخ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideBarQuestions;
