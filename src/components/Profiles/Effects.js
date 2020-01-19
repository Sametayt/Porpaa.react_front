import React from 'react';
import EffectsWeek from '../Profiles/EffectsWeek';
import EffectsMonth from '../Profiles/EffectsMonth';

const Effects = props => {
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
  return (
    <div className="o-container u-medium-padding-vertical">
      <h5 className=" u-medium-margin-horizontal">گزارش عملکرد من</h5>
      <div className="u-display-flex u-justify-content-center u-horizontal-center">
        <h4 className="u-bold-weight u-primary-text-color o-col-lg-4 o-col-sm-6 u-full-width u-no-margin">این هفته</h4>
        <h4 className="u-bold-weight u-primary-text-color o-col-lg-4 o-col-sm-6 u-full-width u-no-margin">این ماه</h4>
      </div>
      <div className="u-display-flex u-flex-row u-justify-content-center">
        <div className="c-profile__effects o-col-lg-4 o-col-md-4 o-col-sm-6">
          <EffectsWeek newAP={newXP} />
        </div>
        <div className="c-profile__effects o-col-lg-4 o-col-md-4 o-col-sm-6">
          <EffectsMonth />
        </div>
      </div>
    </div>
  );
};
export default Effects;
