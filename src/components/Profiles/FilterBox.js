import React from 'react';
import { Dropdown, ButtonToolbar, ToggleButtonGroup, ToggleButton, Form } from 'react-bootstrap';

import filter1 from '../../assets/img/Profiles/filter1.png';
import filter2 from '../../assets/img/Profiles/filter2.png';
import filter3 from '../../assets/img/Profiles/filter3.png';
import filter4 from '../../assets/img/Profiles/filter4.png';
import filter5 from '../../assets/img/Profiles/filter5.png';

const FilterBox = () => {
 return (
    <ButtonToolbar className="o-col-lg-9 o-col-md-9  c-profile__checkbox u-display-flex u-flex-row u-justify-content-center u-rounded btn-toolbar u-display-none-max-sm">
    <ToggleButtonGroup type="radio" name="difficulty">
      <ToggleButton
        itemvalue="easy"
        className="c-button__toggel u-display-flex u-flex-row u-flex-column-sm"
        variant="easy"
        value="easy"
      >
        <img className="u-order-sm-last u-order-lg-first u-order-md-first" src={filter1} height="35"/>
        <span className=" u-small-margin-top u-no-margin-sm">شخصی</span>
      </ToggleButton>
      <ToggleButton
        className="c-button__toggel u-display-flex u-flex-row u-flex-column-sm"
        variant="medium"
        itemvalue="medium"
        value="medium"
      >
        <img className="u-order-sm-last u-order-lg-first u-order-md-first" src={filter2} height="35"/>
        <span className=" u-small-margin-top u-small-margin-right u-no-margin-sm">اجتماعی</span>
      </ToggleButton>
      <ToggleButton
        itemvalue="hard"
        className="c-button__toggel u-display-flex u-flex-row u-flex-column-sm"
        variant="light"
        value="hard"
      >
        <img className="u-order-sm-last u-order-lg-first u-order-md-first" src={filter3} height="35"/>
        <span className=" u-small-margin-top u-small-margin-right u-no-margin-sm">حضور</span>
      </ToggleButton>
      <ToggleButton
        itemvalue="hard"
        className="c-button__toggel u-display-flex u-flex-row u-flex-column-sm"
        variant="light"
        value="hard"
      >
        <img className="u-order-sm-last u-order-lg-first u-order-md-first" src={filter4} height="35"/>
        <span className=" u-small-margin-top u-small-margin-right u-no-margin-sm">نظارت</span>
      </ToggleButton>
      <ToggleButton
        itemvalue="hard"
        className="c-button__toggel u-display-flex u-flex-row u-flex-column-sm"
        variant="light"
        value="hard"
      >
        <img className="u-order-sm-last u-order-lg-first u-order-md-first" src={filter5} height="35"/>
        <span className=" u-small-margin-top u-small-margin-right u-no-margin-sm">محتوا</span>
      </ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
 );
}
export default FilterBox;