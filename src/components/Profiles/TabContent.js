import React from 'react';
import CardList from '../Profiles/CardList';
import map from '../../assets/img/Profiles/map.png';
// import mapRoad from '../../assets/img/Profiles/Group 1338.png';

const TabContent = props => {
  let cardList = null;
  if (props.data && props.data.length > 0) {
    cardList = props.data.map((val, key) => {
      return <CardList key={key} img={val.img} title={val.title} name={val.name} />;
    });
  }

  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className='c-profile o-container u-xlarge-padding-bottom u-large-padding-horizontal'>
      <div className='c-profile__map-holder c-row u-position-relative'>
        {arr.map((item, index) => {
          return (
            <div
              className={`c-col-lg-3 c-col-md-2 c-col-md-3 c-profile__mapItem-${
                index < 12 ? index : index - 12
              } u-medium-padding-horizontal`}
            >
              <div
                className={`c-profile__card-content u-medium-margin-top u-medium-margin-bottom-xl u-smallx-padding-horizontal-xl`}
              >
                <div className=' u-display-flex u-flex-row u-flex-column-md u-align-items-center'>
                  <img src={map} className='u-smallx-margin-top-lg   u-display-inline-lg' />
                  <div className=''>
                    <p className='u-smallx-margin-top-xl u-small-margin-bottom u-smallx-margin-right-xl'>
                      سطح <span className='u-small-margin-right-xl'>{index}</span>
                    </p>
                    <span className='u-smallx-margin-right-xl'>22</span>
                  </div>
                </div>
                <button
                  type='button'
                  className='c-btn c-btn--outlineReport c-btn--outlineReport-profile u-h6-font-size u-rounded u-small-margin-bottom u-small-margin-top'
                >
                  کارت ماموریت
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TabContent;
