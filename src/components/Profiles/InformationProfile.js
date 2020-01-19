import React from 'react';
import InformationBox from '../../components/Profiles/InformationBox';
import { Table } from 'react-bootstrap';
import logo from '../../assets/img/Profiles/gem.png';
import avatar from '../../assets/img/Question/Group 273.svg';

const InformationProfile = props => {
  return (
    <div className='o-container'>
      <div className='u-medium-padding u-medium-padding-top u-medium-margin-bottom u-display-flex'>
        <InformationBox />
      </div>
      <div className='u-horizontal-center u-display-flex u-flex-row'>
        <div className='c-profile_table u-display-flex u-flex-column u-smallx-padding-horizontal o-col-lg-2 o-col-sm-12'>
          <button
            type='button'
            className='btn c-btn--large u-small-margin-bottom  c-button__information'
            onClick={e => props.getAPUsers(e, 1)}
          >
            امروز
          </button>
          <button
            type='button'
            className='btn c-button__information c-btn--large u-small-margin-bottom'
            onClick={e => props.getAPUsers(e, 7)}
          >
            هفته
          </button>
          <button
            type='button'
            className='btn c-button__information c-btn--large u-small-margin-bottom'
            onClick={e => props.getAPUsers(e, 30)}
          >
            ماه
          </button>
          <button
            type='button'
            className='btn c-button__information c-btn--large u-small-margin-bottom'
            onClick={e => props.getAPUsers(e)}
          >
            همه
          </button>
        </div>
        <Table responsive borderless>
          <tbody className='u-horizontal-center'>
            {props.data
              ? props.data.splice(0, 10).map(function(item) {
                  return (
                    <tr>
                      <td className='u-small-padding-vertical'>
                        <img src={item.user && item.user.avatar ? item.user.avatar : null}></img>
                      </td>
                      <td className='u-small-padding-vertical'>
                        {item.user && item.user.schoolName ? item.user.schoolName : null}
                      </td>
                      <td className='u-small-padding-vertical'>
                        {item.user && item.user.firstName ? item.user.firstName : null}{' '}
                        {item.user && item.user.lastName ? item.user.lastName : null}
                      </td>
                      <td className='u-small-padding-vertical'>
                        {item.user && item.user.city ? item.user.city : null}
                      </td>
                      <td className='u-small-padding-vertical'>
                        {item.user && item.user.educationLevel ? item.user.educationLevel : null}
                      </td>
                      <td className='u-small-padding-vertical'>
                        <img width='30' height='30' src={logo}></img>
                        {item.total}
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default InformationProfile;
