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

import timer5 from '../../assets/img/Question/Group 222.svg';
import timer4 from '../../assets/img/Question/Time1.svg';
import timer3 from '../../assets/img/Question/Time2.svg';
import timer2 from '../../assets/img/Question/Group 225.svg';
import timer1 from '../../assets/img/Question/Group 226.svg';
import easy from '../../assets/img/Question/Difficult1.svg';
import medium from '../../assets/img/Question/Difficult2.svg';
import hard from '../../assets/img/Question/Difficult3.svg';
const Filters = props => {
  return (
    <Form className="u-display-flex u-flex-row o-col-md-12 u-justify-content-between u-align-items-center u-medium-margin-top u-flex-column-sm u-flex-column-md">
    <div className="o-col-lg-6 o-col-md-12 u-display-flex u-flex-row u-flex-column-sm u-smallx-padding-bottom-md u-justify-content-between">

      <Dropdown className="o-col-md-4">
        <Dropdown.Toggle variant="link" className="c-filter__dropdown u-display-flex-sm" id="dropdown-basic">
          <span>سر فصل</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="u-medium-padding-right c-filter__dropdown-list">
          <Form.Check className="u-small-padding-horizontal">
            <Form.Check onChange={e => props.filter(e, 'subject')} type="radio" id="1" itemvalue="" label="همه" />
          </Form.Check>
          {props.subjects.length > 0
            ? props.subjects.map(function(item) {
                return (
                  <Form.Check className="u-small-padding-horizontal">
                    <Form.Check
                      onChange={e => props.filter(e, 'subject')}
                      type="radio"
                      id={item._id}
                      itemvalue={item._id}
                      label={item.name}
                    />
                  </Form.Check>
                );
              })
            : null}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="o-col-md-4">
        <Dropdown.Toggle variant="link" className="c-filter__dropdown u-display-flex-sm" id="dropdown-basic">
          مقطع سوال
        </Dropdown.Toggle>

        <Dropdown.Menu className="u-medium-padding-right c-filter__dropdown-list">
          <Form.Check className="u-small-padding-horizontal">
            <Form.Check
              onChange={e => props.filter(e, 'educationLevel')}
              type="radio"
              id="1"
              itemvalue=""
              label="همه"
            />
          </Form.Check>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="o-col-md-4">
        <Dropdown.Toggle variant="link" className="c-filter__dropdown u-display-flex-sm" id="dropdown-basic">
          وضعیت سوال
        </Dropdown.Toggle>

        <Dropdown.Menu className="u-medium-padding-right c-filter__dropdown-list">
          <Form.Check className="u-small-padding-horizontal u-small-margin-horizontal">
            <Form.Check onChange={e => props.filter(e, 'status')} type="radio" id="1" itemvalue="4" label="همه" />
          </Form.Check>
        </Dropdown.Menu>
      </Dropdown>
    </div>
      <div className="o-col-md-6 u-display-flex u-flex-row u-flex-wrap u-justify-content-center">
      {['top'].map(placement => (
        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-top`}>طول عمر</Tooltip>}>
          <ButtonToolbar className="c-filter__checkbox c-filter__checkbox-2">
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
        <OverlayTrigger key={placement} placement={placement} overlay={<Tooltip id={`tooltip-top`}>درجه سختی</Tooltip>}>
          <ButtonToolbar className="c-filter__checkbox c-filter__checkbox-2">
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
      </div>

    </Form>
  );
};

export default Filters;
