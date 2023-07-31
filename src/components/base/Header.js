import React from 'react';
import { connect } from 'react-redux';

const TopBar = () => {
  return (
    <header className='rn-header haeder-default black-logo-version header--fixed header--sticky'>
      <div className='header-wrapper rn-popup-mobile-menu m--0 row align-items-center'>
        <div className='col-lg-2 col-6'>
          <div className='header-left'>
            <div className='logo'>
              <a href='#!'>
                <img
                  src='assets/images/logo/as8.png'
                  alt='logo'
                  height='60px'
                  style={{ height: '60px' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className='col-lg-10 col-6'>
          <div className='header-center'>
            <nav
              id='sideNav'
              className='mainmenu-nav navbar-example2 d-none d-xl-block onepagenav'
            >
              <ul className='primary-menu nav nav-pills'>
                <li className='nav-item'>
                  <a
                    className='nav-link '
                    href='#home'
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.querySelector('#home').offsetTop,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#features'
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.querySelector('#features').offsetTop,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Features
                  </a>
                </li>
                {/* <li className='nav-item'>
                  <a className='nav-link' href='#portfolio'>
                    Portfolio
                  </a>
                </li> */}
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#resume'
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.querySelector('#resume').offsetTop,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Resume
                  </a>
                </li>
                {/* <li className='nav-item current'>
                  <a className='nav-link' href='http://localhost:3000/#clients'>
                    Clients
                  </a>
                </li> */}
                {/* <li className='nav-item'>
                  <a className='nav-link' href='#pricing'>
                    Pricing
                  </a>
                </li> */}
                {/* <li className='nav-item'>
                  <a className='nav-link' href='#blog'>
                    blog
                  </a>
                </li> */}
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#contacts'
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.querySelector('#contacts').offsetTop,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(TopBar);
