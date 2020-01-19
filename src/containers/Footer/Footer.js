import React, { Component } from 'react';
import FooterNav from '../../components/Footer/FooterNav';
class Footer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <footer id='footer' className='clearfix u-large-padding-vertical c-header u-light-bkg'>
        <FooterNav />
      </footer>
    );
  }
}

export default Footer;
