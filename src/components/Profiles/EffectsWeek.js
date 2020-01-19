import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Question/porpaa.svg';
import gem from '../../assets/img/Header/gem.png';
import xp from '../../assets/img/Header/king.png';
import bordar from '../../assets/img/Header/bordar.png';
import heart from '../../assets/img/Header/heart.png';
import timerGreen from '../../assets/img/Header/timer.png';
import checked from '../../assets/img/Question/checked.svg';
import tickGray from '../../assets/img/Header/tick-gray.png';
import eye from '../../assets/img/Header/eye.png';
import timerGray from '../../assets/img/Header/timer-gray.png';
import timerRed from '../../assets/img/Header/timer-red.png';
import Chart from '../../components/Common/chart';

const EffectsWeek = props => {
  return (
    <div className="u-medium-margin-top c-profile__effect-week u-display-flex u-flex-column u-justify-content-center">
      <div className="u-display-flex u-flex-row u-justify-content-between">
        <img className="c-header__info-icon" src={checked} width="25px" height="25px" />
        <p>تایید شده</p>
        <span>{props.newAP.write}</span>
      </div>
      <div className="u-display-flex u-flex-row u-justify-content-between">
        <img className="c-header__info-icon" src={heart} width="25px" height="25px" />
        <p>تشکر شده</p>
        <span>{props.newAP.thank}</span>
      </div>
      <div className="u-display-flex u-flex-row u-justify-content-between">
        <img className="c-header__info-icon" src={timerGreen} width="25px" height="25px" />
        <p>زمان طلایی</p>
        <span >(۸۹)</span>
      </div>
      <div className="u-display-flex u-flex-row">
        <img className="c-header__info-icon-profile" src={xp} width="35px" height="35px" />
        <p className=" u-small-margin-top">
          <b>امتیازات روزانه</b>
        </p>
      </div>
      <div
        className="u-display-flex u-flex-row u-position-relative"
        style={{ height: '300px', width: '100%' }}
      >
        <Chart />
      </div>
    </div>
  );
};
export default EffectsWeek;
