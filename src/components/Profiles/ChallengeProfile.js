import React from 'react';
import logo from '../../assets/img/Profiles/baseline-favorite-24px.svg';
import gem from '../../assets/img/Profiles/ch-gem.png';
import list from '../../assets/img/Profiles/ch-list.png';
import iconBig from '../../assets/img/Profiles/ch-big.png';
import book from '../../assets/img/Profiles/ch-book.png';
import time from '../../assets/img/Question/Time1.svg';
import { ProgressBar } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/fa';

const ChallengProfile = props => {
  return (
    <div className='o-container'>
      <div className='u-medium-padding u-medium-padding-top u-medium-margin-bottom'>
        <h5 className='u-medium-padding-top'>چالش های گرفته شده :</h5>
      </div>
      <div className='o-row'>
        {props.activeChallenges.data && props.activeChallenges.data.length > 0
          ? props.activeChallenges.data.map(item => {
              let formattedTimeStamp = moment(item.deadline * 1000).format('YYYY MM DD');
              moment.locale('fa');
              let deadline = moment(formattedTimeStamp).fromNow(true);
              return (
                <div className='o-col-lg-6 o-col-md-6 u-small-margin-vertical '>
                  <div className='c-profile__sign-profile'>
                    <div className=' u-flex-row u-display-flex u-medium-padding-vertical u-medium-padding-horizontal u-align-items-center u-justify-content-start'>
                      <img src={iconBig} className='u-display-inline  u-medium-margin-left' />

                      <div>
                        <h5 className='u-display-inline-block u-small-margin-right u-smallx-padding-top'>
                          {item.challenge.title}
                        </h5>
                        <p className='u-display-block '>{item.challenge.description}</p>

                        <ul className='u-display-flex u-flex-row'>
                          <li className='u-small-margin-left u-display-flex u-flex-row'>
                            <img src={gem} alt='' className='c-profile__img-number u-display-inline' />
                            <p className=''>5</p>
                          </li>

                          <li className='u-small-margin-horizontal u-display-flex u-flex-row'>
                            <img src={list} alt='' className='c-profile__img-number u-display-inline' />
                            <p className=''>5</p>
                          </li>

                          <li className='u-small-margin-horizontal u-display-flex u-flex-row'>
                            <img src={book} alt='' className='c-profile__img-number u-display-inline' />
                            <p className=''>5</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <span className='smallx-margin-top u-display-flex u-flex-row'>
                      <img
                        src={time}
                        alt=''
                        className='c-profile__img-profile u-smallx-margin-right u-display-inline'
                      />
                      <p className='c-profile__hours-profile o-col-lg-3'>{deadline} مانده</p>
                      <ProgressBar now={item.userCompleteProgress} className='u-full-width u-medium-margin-bottom' />
                      <div className='o-col-2 u-medium-margin-right'>
                        <span className=''>40 / </span>
                        <span className='c-profile__sign-profile-number'> {item.userCompleteProgress} </span>
                      </div>
                    </span>
                  </div>
                </div>
              );
              // return (
              //   <div className='o-col-lg-6 o-col-md-6'>
              //     <div className='c-profile__sign-profile u-flex-row u-small-padding-vertical u-medium-padding-horizontal u-display-flex u-justify-content-start u-align-items-center u-large-line-height'>
              //       <img height='100' src={icon} className='u-display-inline u-medium-margin-left' />
              //       <div>
              //         <a className='c-profile_plus'>+</a>
              //         <h5 className='u-display-inline-block  u-no-margin'>چست وچابک</h5>
              //         {/* <span className="c-profile-plus u-display-inline u-pull-left u-medium-margin-left u-smallx-margin-top">+</span> */}
              //         <p className=' u-no-margin u-display-block u-small-margin-top'>
              //           نشان محتوا:20 روز متوالی/با حداقل 1 کیفیت
              //         </p>
              //         <span className='u-no-margin c-profile_continue u-display-block  u-small-margin-top u-no-padding'>
              //           در ادامه...
              //         </span>
              //       </div>
              //     </div>
              //   </div>
              // );
            })
          : null}
      </div>
    </div>
  );
};
export default ChallengProfile;
