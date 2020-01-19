import React from 'react';
import { Link } from 'react-router-dom';
import sideBanner from '../../assets/img/Question/Group 362.svg';
const Sidenav = props => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="c-box u-full-width c-sidenav u-medium-padding-vertical u-medium-padding-horizontal u-display-flex u-flex-column">
            <h3 className="c-sidenav__title u-display-flex u-flex-row" onClick={() => props.clickReport()}>
              <i className="fa fa-list u-small-margin-left" />
              موضوعات
            </h3>
            <ul className="c-sidenav__list">
              <li>
                <a href="#" onClick={e => props.filter('', 'subject')}>
                  {/* <i className="fa fa-heart"/> */}
                  <p className="u-no-margin">همه موضوعات</p>
                </a>
              </li>
              {props.data.length > 0
                ? props.data.map(function(item) {
                    let isActive = null;
                    props.state == item._id ? (isActive = 'is-active') : (isActive = '');
                    return (
                      <li key={item._id}>
                        <a href="#" class={'subject ' + isActive} onClick={e => props.filter(item._id, 'subject')}>
                          {/* <i className="fa fa-heart"/> */}
                          <p className="u-no-margin">{item.name}</p>
                        </a>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
          <img
            src={sideBanner}
            onClick={() => props.click()}
            className=" o-col-md-12 o-media u-medium-margin-top u-xsmall-padding-vertical-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
