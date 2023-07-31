import React, { Fragment, useState } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

const Footer = () => {
  const [scrollTop, setscrollTop] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      setscrollTop(true);
    } else {
      setscrollTop(false);
    }
  });

  return (
    <Fragment>
      {scrollTop && (
        <div
          className='backto-top'
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.querySelector('#home').offsetTop,
              behavior: 'smooth',
            });
          }}
        >
          <div>
            <ArrowUpOutlined />
          </div>
        </div>
      )}
      <div className='rn-footer-area rn-section-gap section-separator'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='footer-area text-center'>
                <div className='logo'>
                  <a href='#!'>
                    <img
                      style={{ height: '70px' }}
                      src='assets/images/logo/as8.png'
                      alt='logo'
                    />
                  </a>
                </div>

                <p className='description mt--30'>
                  © 2023. All rights reserved by Asif Sayyed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
