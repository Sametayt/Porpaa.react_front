import React from 'react';

import avatar from '../../assets/img/Question/Group 357.svg';
import crown from '../../assets/img/Header/king.png';
import icon from '../../assets/img/Question/baseline-person_add-2.svg';

const FirendsBox = props => {
  return (
    <div className="c-box c-friends-box u-display-flex u-flex-column u-justify-content-center u-align-items-center">
      <h4 className="u-horizontal-center u-medium-margin-vertical c-box__title">پرپایان</h4>

      <div className="o-col-lg-10 o-col-md-10 c-custom-tab u-small-margin-bottom u-gray-bkg u-display-flex u-flex-row">
        <a href="#" className="is-active  u-half-width">
          دوستان
        </a>
        <a href="#" className="u-half-width">
          کاربران
        </a>
      </div>

      <ul className=" o-col-lg-12 o-col-md-10 c-custom-tab__tags u-display-flex u-flex-row u-justify-content-between u-align-items-center">
        <li>
          <a className="c-custom-tab__tag-item  is-active">امروز</a>
        </li>
        <li>
          <a className="c-custom-tab__tag-item ">هفته</a>
        </li>
        <li>
          <a className="c-custom-tab__tag-item ">ماه</a>
        </li>
        <li>
          <a className="c-custom-tab__tag-item ">همه</a>
        </li>
      </ul>
      <div className="o-col-md-10 c-friend-box__lis">
        {props.data.length > 0 ? (
          props.data.map(function(item) {
            return (
              <div
                key={item._id}
                className="c-friend-box__list-item u-small-padding-vertical u-display-flex u-flex-row u-small-margin-vertical u-align-items-center u-justify-content-between"
              >
                <img src={item.avatar} className="u-small-margin-left c-avatar-img c-avatar-img--small" />
                <a href="#">
                  {item.firstName} {item.lastName}
                </a>
                <span className="u-small-font-size u-light-gray-text-color u-small-padding-horizontal">
                  {item.schoolLevel}
                </span>
                <img height="20" src={crown} />
                <span className="u-small-font-size">{item.rank || 0}</span>
              </div>
            );
          })
        ) : (
          <p className="u-display-flex u-flex-row u-align-items-center u-justify-content-center u-gray-text-color">
            دوستی یافت نشد.
          </p>
        )}

        <div className=" u-display-flex u-align-items-center u-medium-margin-bottom">
          <a
            href=""
            className="c-btn c-btn--primary c-btn--cta u-display-flex u-flex-row u-align-items-center u-justify-content-center-md c-btn--full"
          >
            <img height="45" className="u-medium-margin-left" src={icon} />
            دعوت دوستان
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirendsBox;
