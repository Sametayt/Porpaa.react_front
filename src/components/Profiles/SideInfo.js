import React from 'react';
import logo from '../../assets/img/Profiles/baseline-favorite-24px.svg';

const SideInfo = props => {
  return (
    <div className="o-container c-box_profile-side u-medium-margin-bottom">
      <div className="c-box c-friends-box  u-display-flex u-flex-column u-justify-content-center">
        <img src={props.data.avatar} className="u-medium-margin-top" />
        <h5 className="u-horizontal-center">{props.data.username}</h5>
        <span className="u-horizontal-center u-medium-padding-bottom">سطح کاربری : {props.data.rank}</span>
        <div className="u-horizontal-center u-medium-padding-top u-large-margin-bottom">
          <div className="c-box-side">
            <h6 className="u-medium-margin-top">
              {' '}
              {props.data.firstName} {props.data.lastName}{' '}
            </h6>
          </div>
          <div className="c-box-side-info u-small-padding-vertical">
            <span className="u-medium-margin-left">{props.data.schoolLevel}</span>
            <span className="u-medium-margin-left">&nbsp;</span>
            <span className="">{props.data.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideInfo;
