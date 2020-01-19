import React       from 'react';
import logo        from '../../assets/img/Profiles/neshan.png';
import FilterBox   from '../Profiles/FilterBox'


const SignProfile = () => {
     return (
       <div className="o-container ">
            <div className="u-medium-padding u-medium-padding-top u-medium-margin-bottom">
                <FilterBox />
                <h5 className="u-medium-padding-top">نشان های کسب شده :</h5>
            </div>

            <div className="o-col-lg-6 o-col-md-6">
                 <div className="c-profile__sign-profile u-flex-row u-small-padding-vertical u-medium-padding-horizontal u-display-flex u-justify-content-start u-align-items-center">
                      <img height="70" src= {logo} className="u-display-inline u-medium-margin-left"/>
                      <div>
                        <h5 className="u-display-inline-block  u-no-margin  u-large-line-height">چست وچابک</h5>
                        <a className="c-profile_plus">+</a>
                     

                        {/* <span className="c-profile-plus u-display-inline u-pull-left u-medium-margin-left u-smallx-margin-top">+</span> */}
                        <p className=" u-no-margin u-display-block u-small-margin-top">نشان محتوا: 20 روز متوالی  /  با حداقل 1 کیفیت</p>

                      </div>
                 </div>
            </div>
            <div className="u-medium-margin-top u-medium-margin-right u-bold-weight u-h5-font-size u-medium-padding-bottom">
             <a href="#" className="u-decoration-none">نشان های بیشتر +</a>
            </div>
       </div>
     );


}
export default SignProfile;


