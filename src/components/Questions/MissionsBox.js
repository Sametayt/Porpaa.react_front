import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import avatar from '../../assets/img/Question/Group 273.svg';
import icon from '../../assets/img/Question/name.svg';

const MissionsBox = props => {
  return (
    <div className='c-box c-missions-box u-medium-margin-bottom u-display-flex u-flex-column u-justify-content-center u-large-padding-top'>
      <img
        src={props.currentUser.avatar ? props.currentUser.avatar : avatar}
        className='c-missions-box__img u-medium-margin-bottom'
      />
      <h4 className='u-horizontal-center u-small-margin-vertical c-box__title'>کارت های ماموریت</h4>
      <ul className='c-mission-box__progress u-medium-padding-horizontal '>
        {props.missionCards.data && props.missionCards.data.length && props.missionCards.data.length > 0
          ? props.missionCards.data.map(item => {
              return (
                <li className='u-display-flex u-flex-row u-align-items-center u-justify-content-between u-medium-margin-vertical'>
                  <img width={item.pointsMax} className='c-mission-box__icon' src={item.icon || icon} />
                  <div className='u-small-margin-left u-full-width u-medium-padding-horizontal'>
                    <ProgressBar animated now={item.pointsRecieved || 0} />
                  </div>
                  <strong className='c-mission-box__score u-display-flex u-flex-row u-flex-nowrap'>
                    <span className='u-primary-text-color'>{item.pointsRecieved || 0}</span>{' '}
                    <span>/ {item.pointsMax}</span>
                  </strong>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default MissionsBox;
