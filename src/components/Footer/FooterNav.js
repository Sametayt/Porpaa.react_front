import React from 'react';
import Container from '../../hoc/Container';
import instaLogo from '../../assets/img/Question/instagram-logo.svg';
import twitterLogo from '../../assets/img/Question/twitter-logo-silhouette.svg';
import facebookLogo from '../../assets/img/Question/facebook.svg';

const FooterNav = props => {
  return (
    <div className='o-container-fluid o-col-12 u-display-flex u-align-items-center u-justify-content-center u-align-content-center u-flex-column-sm u-flex-column-md'>
      <div className='c-footer-padding o-col-lg-4 o-col-md-12 o-col-sm-12 u-justify-content-center u-align-items-center u-flex-row u-display-flex u-medium-padding-vertical-sm'>
        <a href='#' className='c-link u-small-margin-right'>
          درباره ما
        </a>
        <a href='#' className='c-link u-medium-margin-right'>
          سوالات متداول
        </a>
        <a href='#' className='c-link u-medium-margin-right'>
          تماس با ما
        </a>
      </div>

      <div className=' o-col-lg-4 o-col-md-12 o-col-sm-12 u-justify-content-center u-align-items-center u-flex-row u-display-flex u-medium-padding-vertical-sm'>
        <a href='#' className=' u-medium-margin-left '>
          <img src={instaLogo} width='20px' alt='' />
        </a>
        <a href='#' className='  u-medium-margin-left'>
          <img src={twitterLogo} width='20px' alt='' />
        </a>
        <a href='#'>
          <img src={facebookLogo} width='20px' alt='' />
        </a>
      </div>

      <div className='c-footer-padding o-col-lg-4 o-col-md-12 o-col-sm-12 u-justify-content-center u-align-items-center u-flex-row u-display-flex u-medium-padding-vertical-sm'>
        <span>تمامی مطالب این سایت محفوظ است . © ۱۳۹۸</span>
      </div>
    </div>
  );
};

export default FooterNav;
