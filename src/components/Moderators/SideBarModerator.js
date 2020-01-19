import React           from  'react';
import {ProgressBar}   from "react-bootstrap";
import avatar          from '../../assets/img/Question/Group 273.svg';
import icon            from '../../assets/img/Question/name.svg';


const SideBarModerator = () => {
    return (
        <div className="c-box c-missions-box u-medium-margin-bottom u-display-flex u-flex-column u-justify-content-center u-medium-padding-top">
              <img height="160"  src={avatar} alt="" />
              <h4 className="u-horizontal-center u-small-margin-vertical c-box__title u-medium-padding-top">کارت های ماموریت</h4>

            <ul className="c-mission-box__progress u-medium-padding-horizontal ">
               <li className="u-display-flex u-flex-row u-align-items-center u-medium-margin-vertical">
                   <img width="25" className="c-mission-box__icon" src={icon}/>
                   <div className="c-mission-box__bar u-full-width u-medium-padding-horizontal">
                        <ProgressBar now={60} />
                   </div>
                   <strong className="c-mission-box__score u-display-flex u-flex-row u-flex-nowrap">
                       <span className="u-primary-text-color">25</span> <span>/30</span>
                   </strong>
               </li> 
               <li className="u-display-flex u-flex-row u-align-items-center u-medium-margin-vertical">
                   <img width="25" className="c-mission-box__icon" src={icon}/>
                   <div className="c-mission-box__bar u-full-width u-medium-padding-horizontal">
                        <ProgressBar now={30}/>
                   </div>
                   <strong className="c-mission-box__score u-display-flex u-flex-row u-flex-nowrap">
                       <span className="u-primary-text-color">25</span> <span>/30</span>
                   </strong>
               </li>
               <li className="u-display-flex u-flex-row u-align-items-center  u-medium-margin-vertical">
                   <img width="25" className="c-mission-box__icon" src={icon}/>
                   <div className="c-mission-box__bar u-full-width u-medium-padding-horizontal">
                        <ProgressBar now={60} />
                   </div>
                   <strong className="c-mission-box__score u-display-flex u-flex-row u-flex-nowrap">
                       <span className="u-primary-text-color">25</span> <span>/ 30</span>
                   </strong>
               </li> 
            </ul>

        </div>
    )
}
export default SideBarModerator;