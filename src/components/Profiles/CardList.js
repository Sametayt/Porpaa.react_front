import React      from 'react';
import map from '../../assets/img/Profiles/map.png';
// import TabContet  from  '../Profiles/TabContent'

const CardList = props => {
    return (
        <div className="o-col-lg-3 o-col-md-3 o-col-md-6">
           <div className="c-profile__card-content u-medium-margin-top u-medium-margin-bottom u-smallx-padding-horizontal">
            <div className=" u-display-flex u-flex-row u-align-items-center">
                <img src={map} className="u-smallx-margin-top   u-display-inline"/>
                <div>
                <h5 className="u-smallx-margin-top u-small-margin-bottom u-smallx-margin-right">سطح <span className="u-medium-margin-right">{props.title}</span></h5>
                <span className="u-smallx-margin-right">{props.name}</span>
                </div>
            </div>   
                <button type="button"  className="c-btn c-btn--outlineReport c-btn--outlineReport-profile u-h6-font-size u-rounded u-smallx-margin-bottom u-smallx-margin-top">کارت ماموریت</button>   
            </div>
        </div>
    );
}
export default CardList;