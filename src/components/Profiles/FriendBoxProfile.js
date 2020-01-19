import React            from 'react';
 import avatar          from '../../assets/img/Question/Group 273.svg';
import crown            from '../../assets/img/Header/king.png';
// import icon          from "../../assets/img/Question/baseline-person_add-2.svg";
import logo             from '../../assets/img/Profiles/baseline-person_add-2.svg'
import { Link }         from 'react-router-dom';

const FirendsBoxProfile = props => {
  let friendsList = props.searchedUser.data ? props.searchedUser.data : props.friends;

  return (
    <div className="o-container">
      <div className="c-box c-friends-box u-display-flex u-flex-column u-justify-content-center">
        <h4 className="u-horizontal-center u-medium-margin-vertical c-box__title">دوستان</h4>

        <div className="c-custom-tab u-small-margin-bottom u-gray-bkg u-display-flex u-flex-row">          
          <a href="#" className="is-active  u-half-width">
            کل&nbsp;<span className="u-small-font-size">({friendsList.length})</span>
          </a>
          <a href="#" className="u-half-width">
            مدرسه&nbsp;<span className="u-small-font-size">(0)</span>
          </a>
        </div>

        <div className="c-custom-tab__tags u-position-relative u-display-flex u-flex-row u-align-items-center u-medium-padding-horizontal">
          <input type="text" placeholder="جستجو" className="c-header-search__input c-header-search__input_profile" />
          <i className="fa fa-search c-header-search__icon c-icon__search" onClick={e => props.fetchUser(e)} />
        </div>
        <div className="c-friend-box__list u-medium-margin-vertical u-medium-padding-horizontal">
          <div className="c-friend-box__list-item u-small-padding-vertical u-display-flex u-flex-row u-small-margin-vertical u-justify-content-center u-flex-wrap">
            {friendsList
              ? friendsList.splice(0, 10).map(item => {
                  return (
                    <div key={item._id} className="o-col-7 u-small-margin-vertical">
                      <button
                        type="button"
                        class="c-btn--gray u-display-flex u-full-width u-smallx-padding-vertical u-align-items-center"
                      >
                        <img height="26"  class="u-full-width"  src={avatar} className="" alt="" />
                        <p  class="c-box__friend-sidebar-text u-full-width u-no-margin">
                         {item.firstName} {item.lastName}
                        </p>
                      </button>
                    </div>
                  );
                })
              : null}
          </div>
          {/* <div className="c-friend-box__list-item u-small-padding-vertical u-display-flex u-flex-row u-small-margin-vertical u-align-items-center u-justify-content-between">
                    <div className="o-col-6 u-small-margin-vertical">
                        <button type="button" class="c-btn--gray u-display-flex u-full-width u-smallx-padding-vertical u-align-items-center">
                            <img class="u-full-width" src={logo} className="" alt="" />
                            <p class="u-full-width u-no-margin">دانیال طاهری</p>
                        </button>
                    </div>
                    <div className="o-col-6 u-small-margin-vertical">
                        <button type="button" class="c-btn--gray u-display-flex u-full-width u-smallx-padding-vertical  u-align-items-center">
                            <img class="u-full-width" src={logo} className="" alt="" />
                            <p class="u-full-width u-no-margin">دانیال طاهری</p>
                        </button>
                    </div>
                </div> */}

          <div className="u-dispaly-flex u-align-items-center">
            <a
              href=""
              className="c-btn c-btn--primary c-btn--cta u-display-flex u-flex-row u-align-items-center u-justify-content-center c-btn--full"
            >
              <img height="45" className="" src={logo} alt="" />
              دعوت دوستان
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirendsBoxProfile;
