import React from 'react';
import avatar from '../../assets/img/Question/bigfoot.svg';
import gem from '../../assets/img/Question/ruby.svg';
import clock from '../../assets/img/Question/baseline-access_time-24px.svg';
const ChallengesBox = props => {
  return (
    <div className="c-box c-challenges-box u-medium-margin-bottom u-display-flex u-flex-column u-justify-content-center">
      <h4 className="u-horizontal-center u-medium-margin-vertical c-box__title">چالش های داغ</h4>

      <ul className="c-challenges-box__items u-medium-padding-horizontal">
        {props.data.length > 0
          ? props.data.map(function(item) {
              return (
                <li key={item._id} className="u-display-flex u-flex-row u-align-items-start u-small-padding-vertical">
                  <img src={item.icon} width="50" className="u-medium-margin-left" />
                  <div className="c-challenges-box_data u-u-display-flex u-flex-u-flex-column u-full-width">
                    <p className="u-small-font-size u-small-margin-bottom">{item.description}</p>
                    <ul className="u-small-margin-top u-display-flex u-flex-row u-align-items-center u-justify-content-between u-full-width">
                      <li className="u-display-flex u-flex-row u-align-items-center u-red-text-color">
                        <img src={gem} width="15" className="u-small-margin-left" />
                        {item.apNeed}
                      </li>
                      <li className="u-display-flex u-flex-row u-align-items-center u-red-text-color">
                        <span className="u-primary-text-color"> 0 </span> /
                        {item.questionNumber}
                      </li>
                      <li className="u-display-flex u-flex-row u-align-items-center">
                        <img src={clock} width="20" className="u-small-margin-left" />
                        {item.hoursLimitation}
                      </li>
                      <li className="u-display-flex u-flex-row u-align-items-center">
                        <a
                          href="#"
                          className="c-btn c-btn--primary c-btn--small c-btn--rounded"
                          onClick={e => props.start(e, item._id)}
                        >
                          شروع
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default ChallengesBox;
