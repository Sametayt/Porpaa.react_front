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



const EffectsTime = () => {
    return (
    <div>
          <div className="u-medium-margin-top">
                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={xp} width="30px" height="30px" />
                                    <p>مجموع امتیازات</p>
                                    <span>(۲۲)</span>
                                  </div>

                                  <hr />

                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={tickGray} width="25px" height="25px" />
                                    <p>کل جواب ها</p>
                                    <span>(۵۲)</span>
                                  </div>
                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={checked} width="25px" height="25px" />
                                    <p>تایید شده</p>
                                    <span>(۸۹)</span>
                                  </div>

                                  <hr />

                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={heart} width="25px" height="25px" />
                                    <p>تشکر شده</p>
                                    <span>(۵۲)</span>
                                  </div>
                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={eye} width="25px" height="25px" />
                                    <p>بازدید شده</p>
                                    <span>(۸۹)</span>
                                  </div>

                                  <hr />

                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={timerGreen} width="25px" height="25px" />
                                    <p>زمان طلایی</p>
                                    <span>(۲۲)</span>
                                  </div>
                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={timerGray} width="25px" height="25px" />
                                    <p>زمان میانی</p>
                                    <span>(۵۲)</span>
                                  </div>
                                  <div className="u-display-flex u-flex-row u-justify-content-between">
                                    <img className="c-header__info-icon" src={timerRed} width="25px" height="25px" />
                                    <p>زمان پایانی</p>
                                    <span>(۸۹)</span>
                                  </div>
                                </div>
    </div>
    );
}
export default EffectsTime;