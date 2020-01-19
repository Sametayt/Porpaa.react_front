import React from 'react';
import { Dropdown, ButtonToolbar, ToggleButtonGroup, ToggleButton, Form } from 'react-bootstrap';

import timer5 from '../../assets/img/Question/Group 222.svg';
import timer4 from '../../assets/img/Question/Time1.svg';
import timer3 from '../../assets/img/Question/Time2.svg';
import timer2 from '../../assets/img/Question/Group 225.svg';
import timer1 from '../../assets/img/Question/Group 226.svg';
import easy from '../../assets/img/Question/Difficult1.svg';
import medium from '../../assets/img/Question/Difficult3.svg';
import hard from '../../assets/img/Question/Difficult2.svg';
const Filters = props => {
  return (
    <div className="c-filterprofile o-container u-display-flex u-flex-row u-justify-content-between u-align-items-center u-flex-column-sm">
      <Dropdown className="col-lg-4 u-medium-margin-top">
        <Dropdown.Toggle variant="link" className="c-filter__dropdown c-filter__dropdown-profile" id="dropdown-basic">
          <span>موضوع</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="u-medium-padding-right c-filter__drop-profile">
          {props.partials && props.partials.subjects && props.partials.subjects.length > 0
            ? props.partials.subjects.map(item => {
                return (
                  <div key={item.id} className="c-filter__dropdown-menu">
                    <Form.Check
                      onChange={e => props.filterQuestions(item._id, 'subject')}
                      type="radio"
                      name="A"
                      label={item.name}
                    />
                  </div>
                );
              })
            : null}}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="col-lg-4 u-medium-margin-top">
        <Dropdown.Toggle
          variant="link"
          className="c-filter__dropdown c-filter__dropdown-list-profile "
          id="dropdown-basic"
        >
          سر فصل
        </Dropdown.Toggle>

        <Dropdown.Menu className="u-medium-padding-right  c-filter__drop-profile">
          <div className="c-filter__dropdown-menu">
            <Form.Check type="radio" id="1" label="همه سوالات" />
          </div>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="col-lg-4 u-medium-margin-top">
        <Dropdown.Toggle
          variant="link"
          className="c-filter__dropdown"
          id="dropdown-basic"
        >
          وضعیت جواب
        </Dropdown.Toggle>

        <Dropdown.Menu className="u-medium-padding-right  c-filter__drop-profile">
          <div className="c-filter__dropdown-menu">
            <Form.Check type="radio" id="1" label="همه سوالات" />
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Filters;
