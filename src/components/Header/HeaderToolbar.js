import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Tab, Nav, ButtonToolbar, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import friends from '../../assets/img/Header/persons.png';
import dot from '../../assets/img/Header/dot.png';
import notification from '../../assets/img/Header/alert.png';
import profile from '../../assets/img/Header/person.png';
import gem from '../../assets/img/Header/gem.png';
import video from '../../assets/img/Header/video.png';
import baseline from '../../assets/img/Question/baseline-outlined_flag-24px.svg';
import ability from '../../ability';
import Can from '../../Can';

const HeaderToolbar = props => {
  const notiStyle = {
    fontSize: '10px'
  };
  const friendStyle = {
    paddingTop: '20px'
  };
  let friendsList = props.friends.data && props.friends.data.length > 0 ? props.friends.data : props.data.friends;

  if (!ability.can('View', 'Header-Toolbar')) {
    return (
      <ul className='u-display-flex u-flex-row u-align-items-center c-header__toolbar u-no-margin'>
        <li className='u-display-block '>
          <a className='c-btn c-btn--primary' href='/'>
            ورود / ثبت نام
          </a>
        </li>
      </ul>
    );
  }
  return (
    <ul className='u-display-flex u-flex-row u-align-items-center c-header__toolbar u-no-margin'>
      <li className='u-display-block u-large-margin-left'>
        <Dropdown>
          <a href='#'>
            <img src={dot} height='56' />
          </a>
        </Dropdown>
      </li>
      <li className='u-display-block u-large-margin-left'>
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
                    <div className='u-display-flex u-align-items-center'>
                      <h4 className='u-h4-font-size u-small-margin-right u-medium-margin-left' style={friendStyle}>
                        <b>دوستان</b>
                      </h4>
                      <form className='c-header-search' onSubmit={e => props.fetchUser(e)}>
                        <input
                          type='text'
                          className='c-header-searchFriend__input'
                          placeholder='جستجو دوستان و کاربران'
                        />
                        <i onClick={e => props.fetchUser(e)} className='fa fa-search c-header-searchFriend__icon' />
                      </form>
                    </div>
                    {friendsList
                      ? friendsList.map(item => {
                          return (
                            <div className='u-display-flex u-flex-row u-justify-content-start u-small-margin-top'>
                              <img className='c-header__info-icon' src={item.avatar} width='20px' height='20px' />
                              <p className='u-small-margin-right'>
                                <b>
                                  {item.firstName} {item.lastName}
                                </b>
                              </p>
                              {/* <span className="u-small-margin-right u-small-margin-top" style={notiStyle}>
                ۲ دقیقه پیش درخواست دوستی داده است
              </span> */}
                              {props.friends.data ? (
                                <button
                                  className='c-btn c-btn--small u-margin-right-auto c-btn--primary'
                                  onClick={e => props.addFriend(e, item._id)}
                                >
                                  اضافه
                                </button>
                              ) : null}
                            </div>
                          );
                        })
                      : null}
                  </Popover.Content>
                </Popover>
              }
            >
              <div className='u-display-flex u-flex-row u-justify-content-between'>
                <a href='#' variant='secondary'>
                  <img src={friends} height='56' />
                </a>
              </div>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        {/* <Dropdown>
              <Dropdown.Toggle variant="link" className="u-primary-text-color" id="dropdown-basic">
              <img src={friends} height="56" />
              </Dropdown.Toggle>
              
              <Dropdown.Menu className="c-dropDown-menu">
              <Dropdown.Item href="#/action-1">
              <span>دوستان </span>
              <input type="text" className="c-dropDown-menu__input" placeholder="جستجو دوستان و کاربران" />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
              <span className="c-dropDown-item__icon u-small-margin-horizontal">fish</span>
              <span className="c-dropDown-item__name u-small-margin-horizontal">نیما کاغذی</span>
              <span className="c-dropDown-item__status u-small-margin-horizontal">2 دقیقه پیش درخواست دوستی داده</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
              <span className="c-dropDown-item__icon u-small-margin-horizontal">fish</span>
              <span className="c-dropDown-item__name u-small-margin-horizontal">نیما کاغذی</span>
              <span className="c-dropDown-item__status u-small-margin-horizontal">2 دقیقه پیش درخواست دوستی داده</span>
              </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
      </li>
      <li className='u-display-block u-large-margin-left'>
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
                      <div className='c-alert c-alert-secondary'>
                        <div className=' u-justify-content-start u-small-margin-top'>
                          {/* <div className="u-display-flex flex-row u-smallx-margin-bottom">
                <img
                className="c-header__info-icon u-display-inline-block"
                src={gem}
                width="20px"
                height="20px"
                />
                <p className=" u-small-margin-right">
                <b>شما 2 شمش پرپا دریافت کرده اید</b>
                </p>
              </div> */}
                          {/* {console.log('props.notifications.data.length ', props.notifications.data)} */}
                          {props.notifications.data ? (
                            props.notifications.data.map(item => {
                              if (item.seen === false) {
                                return (
                                  <div key={item._id} className='c-alert c-alert-secondary u-small-margin-vertical'>
                                    <div className='u-display-flex u-flex-row u-justify-content-start u-small-margin-top'>
                                      <img className='c-header__info-icon' src={baseline} width='20px' height='20px' />
                                      <p className='u-small-margin-right'>
                                        <b>{item.message}</b>
                                      </p>
                                    </div>
                                  </div>
                                );
                              }
                            })
                          ) : (
                            <div className='c-alert c-alert-secondary u-small-margin-vertical'>
                              <div className='u-display-flex u-flex-row u-justify-content-start u-small-margin-top'>
                                <p className='u-small-margin-right'>
                                  <b>پیامی برای نمایش ندارید</b>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* <div className="c-alert c-alert-secondary">
                    <div className="u-display-flex u-flex-row u-justify-content-start u-small-margin-top">
                    <img className="c-header__info-icon" src={baseline} width="20px" height="20px" />
                    <p className=" u-small-margin-right">
                    <b>گزارش شما تایید شد</b>
                    </p>
                    </div>
                  </div> */}
                      <img src={video} width='240px' />
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div className='u-display-flex u-flex-row u-justify-content-between'>
                <a href='#' variant='secondary'>
                  <img src={notification} height='56' />
                </a>
              </div>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
      </li>
      <li className='u-display-block'>
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
                    <div className='u-small-padding-vertical u-medium-padding-horizontal'>
                      <div className='u-display-block u-small-margin-top'>
                        <div className=''>
                          <Link to='/profile' className='c-link'>
                            <h6>مشاهده پروفایل</h6>
                          </Link>
                        </div>
                        <Can I='View' a='Admin-Panel'>
                          <div className=''>
                            <Link to='/moderator' className='c-link'>
                              <h6>admin panel</h6>
                            </Link>
                          </div>
                        </Can>
                        <div>
                          <Link to='/settings' className='c-link'>
                            <h6>تنظیمات</h6>
                          </Link>
                        </div>
                        <div>
                          <a onClick={props.logOut} className='c-link'>
                            <h6>خروج</h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Content>
                </Popover>
              }
            >
              <div className='u-display-flex u-flex-row u-justify-content-between'>
                <a href='#' variant='secondary'>
                  <img src={profile} height='56' />
                </a>
              </div>
            </OverlayTrigger>
          ))}
        </ButtonToolbar>
        {/* <Dropdown>
                    <Dropdown.Toggle variant="link" className="u-primary-text-color" id="dropdown-basic">
                    <img src={profile} height="56" />
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu className="c-dropDown-menu">
                    <Dropdown.Item href="#/action-1">مشاهده پروفایل</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">تنظیمات</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">خروج</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
      </li>
    </ul>
  );
};

export default HeaderToolbar;
