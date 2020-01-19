import React from 'react';
import symb from '../../assets/img/2.png';

const stepContent = (name, text) => {
  return `
  <div class='u-display-flex u-flex-row                 u-align-items-center u-justify-content-center'>
    <img class='c-modal__symbol--step u-smallx-margin-bottom u-margin-right-auto u-medium-padding-horizontal u-order-last' src=${symb}/>
    <h4 class='c-modal__title u-horizontal-center u-medium-padding-horizontal u-smallx-margin-right'>
      ${text || 'hi'} ${name || 'asghar'}
    </h4>
  </div>`;
};

export default stepContent;
