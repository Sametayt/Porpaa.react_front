import React from 'react';
import { Dropdown, ButtonToolbar, ToggleButtonGroup, ToggleButton, Form } from 'react-bootstrap';

const InformationBox = () => {
  return (
    <ButtonToolbar className='c-profile__checkbox u-smallx-padding-vertical u-dispaly-flex u-justify-content-around u-rounded u-full-width'>
      <ToggleButtonGroup className='c-profile-side-information' type='radio' name='difficulty'>
        <ToggleButton itemvalue='easy' className='' variant='easy' value='easy'>
          مدرسه
        </ToggleButton>
        <ToggleButton className='' variant='medium' itemvalue='medium' value='medium'>
          دوستان
        </ToggleButton>
        <ToggleButton itemvalue='hard' className='' variant='light' value='hard'>
          شهر
        </ToggleButton>
        <ToggleButton itemvalue='hard' className='' variant='light' value='hard'>
          کاربران
        </ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
  );
};
export default InformationBox;
