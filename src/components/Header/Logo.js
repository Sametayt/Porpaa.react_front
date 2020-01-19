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
import ability from '../../ability';

import { Dropdown, Tab, Tabs, Nav, ButtonToolbar, OverlayTrigger, Popover, Button } from 'react-bootstrap';

const stopAutoClose = (ek, e) => {
  // console.log(ek);
  e.preventDefault();
  console.log(e);
};

const Logo = props => {
  let newXP = {
    write: 0,
    thank: 0,
    bookmark: 0
  };

  let newAP = {
    write: 0,
    thank: 0,
    bookmark: 0
  };

  if (props.xp && props.xp.length > 0) {
    props.xp.map(function(item) {
      switch (item.type) {
        case 'write':
          newXP.write += Number(item.point);
        case 'thank':
          newXP.thank += Number(item.point);
        case 'bookmark':
          newXP.bookmark += Number(item.point);
      }
    });
  }

  if (props.ap && props.ap.length > 0) {
    props.ap.map(function(item) {
      switch (item.type) {
        case 'write':
          newAP.write += Number(item.point);
        case 'thank':
          newAP.thank += Number(item.point);
        case 'bookmark':
          newAP.bookmark += Number(item.point);
      }
    });
  }

  if (!ability.can('View', 'Header-Logo')) {
    return (
      <ul className='u-display-flex u-flex-row u-align-items-center c-header__toolbar u-no-margin'>
        <li className='u-large-margin-left u-display-block'>
          <Link to='/questions'>
            <img className='c-header__logo' src={logo} />
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className='u-display-flex u-flex-row u-align-items-center c-header__toolbar u-no-margin'>
      <li className='u-large-margin-left u-display-block'>
        <Link to='/questions'>
          <img className='c-header__logo' src={logo} />
        </Link>
      </li>
      <li>
        <ButtonToolbar>
          {['bottom'].map(placement => (
            <OverlayTrigger
              trigger='click'
              rootClose={true}
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Content>
                    <div className='u-small-padding-vertical u-small-padding-horizontal'>
                      <div className='u-display-flex u-flex-row u-justify-content-start u-align-items-center'>
                        <img className='c-header__info-icon' src={gem} />
                        <p className='u-medium-margin-top u-small-margin-right'>شمش پرپا</p>
                      </div>
                      <button className='c-btn c-btn--primary u-medium-margin-top'>ورود به فروشگاه</button>
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div className='u-display-flex u-flex-row u-justify-content-between'>
                <a href='#' variant='secondary'>
                  <img className='c-header__info-icon' src={gem} />
                </a>
                <p className='u-medium-margin-top u-small-margin-right'>{props.totalXp ? props.totalXp.total : 0}</p>
              </div>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
      </li>
      <li>
        <ButtonToolbar>
          {['bottom'].map(placement => (
            <OverlayTrigger
              trigger='click'
              rootClose={true}
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${placement}`}>
                  <Popover.Content>
                    <div className='u-small-padding-vertical u-small-padding-horizontal'>
                      <div className='u-display-flex u-flex-row u-justify-content-start u-align-items-center'>
                        {/* <p>شمش پرپا</p> */}
                        <div className='u-display-block'>
                          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                            <Nav variant='pills' className='block-column'>
                              <Nav.Item disabled>
                                <b className='u-small-margin-left'>گزارش عملکرد من</b>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey='first'>این هفته</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey='second'>کل زمان</Nav.Link>
                              </Nav.Item>
                            </Nav>

                            <Tab.Content>
                              <Tab.Pane eventKey='first'>
                                <div className='u-medium-margin-top'>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={checked} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>تایید شده</p>
                                    <span className='u-medium-margin-right'>{newXP.write}</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={heart} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>تشکر شده</p>
                                    <span className='u-medium-margin-right'>{newXP.thank}</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={timerGreen} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>زمان طلایی</p>
                                    <span className='u-medium-margin-right'>(۸۹)</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row'>
                                    <img className='c-header__info-icon' src={xp} width='35px' height='35px' />
                                    <p className='u-small-margin-top u-small-margin-right'>
                                      <b>امتیازات روزانه</b>
                                    </p>
                                  </div>
                                  <div>
                                    <Chart />
                                  </div>

                                  {/* <img src={bordar} width="240px" /> */}
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey='second'>
                                <div className='u-medium-margin-top u-medium-margin-horizontal'>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={xp} width='30px' height='30px' />
                                    <p className='u-medium-margin-right'>مجموع امتیازات</p>
                                    <span className='u-medium-margin-right'>
                                      ({props.totalAp ? props.totalAp.total : 0})
                                    </span>
                                  </div>

                                  <hr />

                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={tickGray} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>کل جواب ها</p>
                                    <span className='u-medium-margin-right'>(۵۲)</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={checked} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>تایید شده</p>
                                    <span className='u-medium-margin-right'>(۸۹)</span>
                                  </div>

                                  <hr />

                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={heart} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>تشکر شده</p>
                                    <span className='u-medium-margin-right'>(۵۲)</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={eye} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>بازدید شده</p>
                                    <span className='u-medium-margin-right'>(۸۹)</span>
                                  </div>

                                  <hr />

                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={timerGreen} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>زمان طلایی</p>
                                    <span className='u-medium-margin-right'>(۲۲)</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={timerGray} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>زمان میانی</p>
                                    <span className='u-medium-margin-right'>(۵۲)</span>
                                  </div>
                                  <div className='u-display-flex u-flex-row u-small-margin-right'>
                                    <img className='c-header__info-icon' src={timerRed} width='25px' height='25px' />
                                    <p className='u-medium-margin-right'>زمان پایانی</p>
                                    <span className='u-medium-margin-right'>(۸۹)</span>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </div>
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div className='u-display-flex u-flex-row u-justify-content-between u-medium-margin-right'>
                <a href='#' variant='secondary'>
                  <img className='c-header__info-icon' src={xp} />
                </a>
                <p className='u-medium-margin-top u-small-margin-right'>{props.totalAp ? props.totalAp.total : 0}</p>
              </div>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
      </li>
    </ul>
  );
};

export default Logo;
