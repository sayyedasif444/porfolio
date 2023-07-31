import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Index = () => {
  const form = useRef();

  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [subject, setsubject] = useState('');
  const [msg, setmsg] = useState('');

  const sendEmail = async () => {
    if (name !== '' && email !== '') {
      const config = {
        'Content-Type': 'application/json',
      };
      const body = {
        msg,
        name,
        email,
        phone,
        subject,
        fromid: 'mail@asifsayyed.com',
        emailid: 'info@asifsayyed.com',
      };
      await axios({
        method: 'POST',
        url: 'https://general.asifsayyed.com/api/general/sendmail',
        data: body,
        headers: config,
      })
        .then(async (response) => {
          if (response.data.statuscode === 200) {
            message.success('Query submitted! will get back to you ASAP.');
            setemail('');
            setname('');
            setsubject('');
            setmsg('');
            setphone('');
          } else {
            message.error('Something went wrong! Please try again.');
          }
        })
        .catch((error) => {
          message.error('Something went wrong! Please try again.');
        });
    } else {
      message.error('Please fill atleast name and email to proceed');
    }
  };

  return (
    <main className='main-page-wrapper'>
      <div id='home' className='rn-slider-area'>
        <div className='slide slider-style-1'>
          <div className='container'>
            <div className='row row--30 align-items-center'>
              <div className='order-2 order-lg-1 col-lg-8 mt_md--20 mt_sm--20 mt_lg--20'>
                <div className='content'>
                  <div className='inner'>
                    <span className='subtitle'>Welcome to my world</span>
                    <h1 className='title'>
                      Hi, I’m <span>Asif Sayyed,</span>
                      <br />
                      <span className='header-caption' id='page-top'>
                        <span className='cd-headline clip is-full-width'>
                          <span className='cd-words-wrapper'>
                            <b className='is-visible'>Software Developer.</b>
                            <b className='is-hidden'>Mobile App Developer.</b>
                            <b className='is-hidden'>UI/UX Developer.</b>
                            <b className='is-hidden'>Graphic Designer.</b>
                            <b className='is-hidden'>Data Analytics.</b>
                          </span>
                        </span>
                      </span>
                    </h1>
                    <div>
                      <p className='description'>
                        Skilled digital transformation professional with years
                        of experience helping businesses achieve remarkable
                        growth and success. With expertise in identifying
                        opportunities, implementing strategies, and leveraging
                        data-driven insights, Asif Sayyed can help your business
                        reach its goals
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30'>
                      <div className='skill-share-inner'>
                        <span className='title'>best skill on</span>
                        <ul className='skill-share d-flex liststyle'>
                          <li title='React'>
                            <img
                              src='assets/images/icons/react.png'
                              alt='Icons Images'
                            />
                          </li>
                          <li title='Javascript'>
                            <img
                              src='assets/images/icons/javascript.png'
                              alt='Icons Images'
                            />
                          </li>
                          <li title='Nodejs'>
                            <img
                              src='assets/images/icons/node.png'
                              alt='Icons Images'
                            />
                          </li>
                          <li title='Excel'>
                            <img
                              src='assets/images/icons/excel.png'
                              alt='Icons Images'
                            />
                          </li>
                          <li title='HTML/CSS'>
                            <img
                              src='assets/images/icons/css.png'
                              alt='Icons Images'
                            />
                          </li>
                          <li title='Laravel'>
                            <img
                              src='assets/images/icons/laravel.png'
                              alt='Icons Images'
                            />
                          </li>
                          <li title='Python'>
                            <img
                              src='assets/images/icons/python.png'
                              alt='Icons Images'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30'>
                      <div className='social-share-inner-left'>
                        <span className='title'>find me</span>
                        <ul className='social-share d-flex liststyle'>
                          <li className='facebook'>
                            <a
                              href='https://www.linkedin.com/in/asif-sayyed/'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                src='assets/images/icons/linkedin.png'
                                alt='Icons Images'
                              />
                            </a>
                          </li>
                          <li className='instagram'>
                            <a
                              href='https://wa.me/8668758730'
                              target='_blanks'
                              rel='noreferrer'
                            >
                              <img
                                src='assets/images/icons/whatsapp.png'
                                alt='Icons Images'
                              />
                            </a>
                          </li>
                          <li className='linkedin'>
                            <a
                              href='https://www.instagram.com/sayyedasif444/'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <img
                                src='assets/images/icons/insta.png'
                                alt='Icons Images'
                              />
                            </a>
                          </li>
                          <li className='linkedin'>
                            <a
                              href='/assets/resume.pdf'
                              target='_blank'
                              download={'AsifResume'}
                              rel='noreferrer'
                              style={{
                                position: 'relative',
                                color: '#f9004d',
                                fontSize: '45px',
                              }}
                            >
                              <DownloadOutlined
                                style={{
                                  position: 'absolute',
                                  top: '50%',
                                  left: '50%',
                                  transform: 'translate(-50%, -50%)',
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='order-1 order-lg-2 col-lg-4'>
                <div className='thumbnail'>
                  <div className='inner'>
                    <img
                      src='/assets/images/site/homeImage.jpg'
                      alt='Digital Illusion'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='rn-service-area rn-section-gap section-separator'
        id='features'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                className='section-title text-left'
                data-aos-duration='500'
                data-aos-delay='100'
                data-aos-once='true'
              >
                <span className='subtitle'>Features</span>
                <h2 className='title'>What I Do</h2>
              </div>
            </div>
          </div>
          <div className='row row--25 mt_md--10 mt_sm--10'>
            <div
              className='col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30'
            >
              <div className='rn-service'>
                <div className='inner'>
                  <div className='icon'>
                    <i data-feather='menu'></i>
                  </div>
                  <div className='content'>
                    <h4 className='title'>
                      <a href='#!'>Web Development</a>
                    </h4>
                    <p className='description'>
                      Expertise in designing and building customized Web
                      solutions that meet the specific needs of businesses,
                      enabling them to enhance their operations, online reach
                      and achieve their digital transformation goals.
                    </p>
                    <a className='read-more-button' href='#!'>
                      <i
                        className='feather-arrow-right'
                        style={{ visibility: 'hidden' }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a className='over-link' href='#!'>
                  {' '}
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30'
            >
              <div className='rn-service'>
                <div className='inner'>
                  <div className='icon'>
                    <i data-feather='menu'></i>
                  </div>
                  <div className='content'>
                    <h4 className='title'>
                      <a href='#!'>Mobile App</a>
                    </h4>
                    <p className='description'>
                      With a focus on intuitive user interfaces, seamless
                      performance, and compatibility across platforms, I deliver
                      mobile app solutions that drive business success in the
                      ever-growing mobile market.
                    </p>
                    <a className='read-more-button' href='#!'>
                      <i
                        className='feather-arrow-right'
                        style={{ visibility: 'hidden' }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a className='over-link' href='#!'>
                  {' '}
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30'
            >
              <div className='rn-service'>
                <div className='inner'>
                  <div className='icon'>
                    <i data-feather='menu'></i>
                  </div>
                  <div className='content'>
                    <h4 className='title'>
                      <a href='#!'>UI/UX</a>
                    </h4>
                    <p className='description'>
                      With a deep understanding of user behavior and modern
                      design principles, I deliver UI/UX solutions that enhance
                      customer satisfaction and drive business growth.
                    </p>
                    <a className='read-more-button' href='#!'>
                      <i
                        className='feather-arrow-right'
                        style={{ visibility: 'hidden' }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a className='over-link' href='#!'>
                  {' '}
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30'
            >
              <div className='rn-service'>
                <div className='inner'>
                  <div className='icon'>
                    <i data-feather='menu'></i>
                  </div>
                  <div className='content'>
                    <h4 className='title'>
                      <a href='#!'>Graphic Design</a>
                    </h4>
                    <p className='description'>
                      I offer expertise in creating visually stunning designs
                      that effectively communicate a brand's message and
                      captivate its audience.
                    </p>
                    <a className='read-more-button' href='#!'>
                      <i
                        className='feather-arrow-right'
                        style={{ visibility: 'hidden' }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a className='over-link' href='#!'>
                  {' '}
                </a>
              </div>
            </div>
            <div
              className='col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30'
            >
              <div className='rn-service'>
                <div className='inner'>
                  <div className='icon'>
                    <i data-feather='menu'></i>
                  </div>
                  <div className='content'>
                    <h4 className='title'>
                      <a href='#!'>Data Analytics</a>
                    </h4>
                    <p className='description'>
                      Through advanced data analysis techniques, visualization,
                      and reporting, I deliver actionable intelligence that
                      drives business growth and improves performance.
                    </p>
                    <a className='read-more-button' href='#!'>
                      <i
                        className='feather-arrow-right'
                        style={{ visibility: 'hidden' }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a className='over-link' href='#!'>
                  {' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='rn-resume-area rn-section-gap section-separator'
        id='resume'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                <span className='subtitle'>5+ Years of Experience</span>
                <h2 className='title'>My Resume </h2>
              </div>
            </div>
          </div>
          <div className='row mt--45'>
            <div className='col-lg-12'>
              <ul
                className='rn-nav-list nav nav-tabs'
                id='myTabs'
                role='tablist'
              >
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='education-tab'
                    data-bs-toggle='tab'
                    href='#education'
                    role='tab'
                    aria-controls='education'
                    aria-selected='true'
                  >
                    education
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='professional-tab'
                    data-bs-toggle='tab'
                    href='#professional'
                    role='tab'
                    aria-controls='professional'
                    aria-selected='false'
                  >
                    professional Skills
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='experience-tab'
                    data-bs-toggle='tab'
                    href='#experience'
                    role='tab'
                    aria-controls='experience'
                    aria-selected='false'
                  >
                    experience
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='interview-tab'
                    data-bs-toggle='tab'
                    href='#interview'
                    role='tab'
                    aria-controls='interview'
                    aria-selected='false'
                  >
                    Certification
                  </a>
                </li>
              </ul>
              <div className='rn-nav-content tab-content' id='myTabContents'>
                <div
                  className='tab-pane show active fade single-tab-area'
                  id='education'
                  role='tabpanel'
                  aria-labelledby='education-tab'
                >
                  <div className='personal-experience-inner mt--40'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-12 col-12'>
                        <div className='content'>
                          <span className='subtitle'>2017 - 2020</span>
                          <h4 className='maintitle'>Masters</h4>
                          <div className='experience-list'>
                            <div className='resume-single-list'>
                              <div className='inner'>
                                <div className='heading pb-0'>
                                  <div className='title'>
                                    <h4>Masters in Computer Application</h4>
                                    <span className='mb-0 pb-0'>
                                      Allana Insititue of Management Sciences
                                    </span>
                                  </div>
                                </div>
                                <p className='description'>
                                  I hold a Master's degree in Computer
                                  Application with first-class distinction,
                                  showcasing my exceptional academic performance
                                  and expertise in the field.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60'>
                        <div className='content'>
                          <span className='subtitle'>2014 - 2017</span>
                          <h4 className='maintitle'>Bachelors</h4>
                          <div className='experience-list'>
                            <div className='resume-single-list'>
                              <div className='inner'>
                                <div className='heading pb-0'>
                                  <div className='title'>
                                    <h4>Bachelors in computer application</h4>
                                    <span className='mb-0 pb-0'>
                                      Maeers' MIT-SOM College, Kothrud
                                    </span>
                                  </div>
                                </div>
                                <p className='description'>
                                  I hold a Bachelors degree in Computer
                                  Application with first-class, with some
                                  challenging projects developed for the
                                  academic years.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade '
                  id='professional'
                  role='tabpanel'
                  aria-labelledby='professional-tab'
                >
                  <div className='personal-experience-inner mt--40'>
                    <div className='row row--40'>
                      <div className='col-lg-6 col-md-6 col-12 mt_sm--60'>
                        <div className='progress-wrapper'>
                          <div className='content'>
                            <span className='subtitle'>Features</span>
                            <h4 className='maintitle'>Development Skill</h4>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>HTML/CSS</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  style={{ width: '95%' }}
                                  role='progressbar'
                                  aria-valuenow='95'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>95%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>JAVASCRIPT</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '90%' }}
                                  role='progressbar'
                                  aria-valuenow='90'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>90%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>REACT</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '85%' }}
                                  role='progressbar'
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>85%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>
                                NODE.JS / EXPRESS.JS
                              </h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '80%' }}
                                  role='progressbar'
                                  aria-valuenow='80'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>80%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>
                                PHP / LARAVEL
                              </h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '70%' }}
                                  role='progressbar'
                                  aria-valuenow='70'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>70%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>Python</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '70%' }}
                                  role='progressbar'
                                  aria-valuenow='70'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>70%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>THREE.JS</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '65%' }}
                                  role='progressbar'
                                  aria-valuenow='65'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>65%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>WORDPRESS</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '75%' }}
                                  role='progressbar'
                                  aria-valuenow='65'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>75%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>
                                Database (SQL / MONGODB)
                              </h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '80%' }}
                                  role='progressbar'
                                  aria-valuenow='65'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>80%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>
                                Mobile App (Flutter and React Native)
                              </h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '70%' }}
                                  role='progressbar'
                                  aria-valuenow='65'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>70%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>GIT</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.7s'
                                  data-wow-delay='.5s'
                                  style={{ width: '80%' }}
                                  role='progressbar'
                                  aria-valuenow='65'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>80%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-12'>
                        <div className='progress-wrapper'>
                          <div className='content'>
                            <span className='subtitle'>Features</span>
                            <h4 className='maintitle'>
                              Design & Analytical Skill
                            </h4>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>PHOTOSHOP</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '80%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>80%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>
                                ILLUSTRATOR
                              </h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '80%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>80%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>FIGMA</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '70%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>70%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>ADOBE XD</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '70%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>70%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>EXCEL</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '75%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>75%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>POWER BI</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '65%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>65%</span>
                                </div>
                              </div>
                            </div>
                            <div className='progress-charts'>
                              <h6 className='heading heading-h6'>TABLEU</h6>
                              <div className='progress'>
                                <div
                                  className='progress-bar wow fadeInLeft'
                                  data-wow-duration='0.5s'
                                  data-wow-delay='.3s'
                                  role='progressbar'
                                  style={{ width: '65%' }}
                                  aria-valuenow='85'
                                  aria-valuemin='0'
                                  aria-valuemax='100'
                                >
                                  <span className='percent-label'>65%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane show fade single-tab-area'
                  id='experience'
                  role='tabpanel'
                  aria-labelledby='experience-tab'
                >
                  <div className='personal-experience-inner mt--40'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-12 col-12'>
                        <div className='content'>
                          <span className='subtitle'>Sept-2020 - Current</span>
                          <h4 className='maintitle'>Momenttext AI</h4>
                          <div className='experience-list'>
                            <div className='resume-single-list'>
                              <div className='inner'>
                                <div className='heading pb-0'>
                                  <div className='title'>
                                    <h4>Software Developer</h4>
                                    <span className='mb-0 pb-0'>
                                      Delhi, Inida (Remote)
                                    </span>
                                  </div>
                                </div>
                                <div className='description'>
                                  <ul>
                                    <li>
                                      Developed robust and scalable web
                                      applications.
                                    </li>
                                    <li>
                                      Collaborated with cross-functional teams
                                      to gather requirements and translate them
                                      into technical specifications.
                                    </li>
                                    <li>
                                      Implemented and maintained RESTful APIs
                                      for seamless integration with backend
                                      systems.
                                    </li>
                                    <li>
                                      Utilized Git for version control and
                                      collaborated with team members using Agile
                                      methodologies.
                                    </li>
                                    <li>
                                      Conducted code reviews and performed unit
                                      testing to ensure code quality and
                                      minimize bugs.
                                    </li>
                                    <li>
                                      Worked closely to create visually
                                      appealing and 100% user-friendly
                                      interfaces.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60'>
                        <div className='content'>
                          <span className='subtitle'>Jan-2018 - Jul-2020</span>
                          <h4 className='maintitle'>Parallax Developers</h4>
                          <div className='experience-list'>
                            <div className='resume-single-list'>
                              <div className='inner'>
                                <div className='heading pb-0'>
                                  <div className='title'>
                                    <h4>Software Developer</h4>
                                    <span className='mb-0 pb-0'>
                                      Pune, India (Freelance)
                                    </span>
                                  </div>
                                </div>
                                <div className='description'>
                                  <ul>
                                    <li>
                                      Provided web development, mobile
                                      application development and graphic design
                                      services to various clients.
                                    </li>
                                    <li>
                                      Developed responsive and dynamic web
                                      application and mobile application using
                                      HTML, CSS, JavaScript, bootstrap, reactjs,
                                      laravel, php, python and flutter.
                                    </li>
                                    <li>
                                      Created custom graphics, logos, and
                                      illustrations for clients' branding need.
                                    </li>
                                    <li>
                                      Managed multiple projects simultaneously
                                      and ensured timely delivery of
                                      high-quality work with 100% commitment.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='interview'
                  role='tabpanel'
                  aria-labelledby='interview-tab'
                >
                  <div className='personal-experience-inner mt--40'>
                    <div className='row'>
                      <div className='col-lg-6 col-md-12 col-12'>
                        <div className='content'>
                          <h4 className='maintitle'>Cetifications</h4>
                          <div className='experience-list'>
                            <div
                              data-aos='fade-up'
                              data-aos-duration='500'
                              data-aos-delay='300'
                              data-aos-once='true'
                              className='resume-single-list'
                            >
                              <div className='inner'>
                                <div className='heading mb-0 pb-0'>
                                  <div className='title'>
                                    <h4>Web Design and development</h4>
                                    <span>
                                      Arena Animation - 12/2014 - 03/2016
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-aos='fade-up'
                              data-aos-duration='500'
                              data-aos-delay='500'
                              data-aos-once='true'
                              className='resume-single-list'
                            >
                              <div className='inner'>
                                <div className='heading mb-0 pb-0'>
                                  <div className='title'>
                                    <h4> MERN Stack Certification</h4>
                                    <span>Udemy - 02/2021 - 04/2021</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60'>
                        <div className='content'>
                          <h4
                            className='maintitle'
                            style={{ visibility: 'hidden' }}
                          >
                            Job Experience
                          </h4>
                          <div className='experience-list'>
                            <div
                              data-aos='fade-up'
                              data-aos-duration='500'
                              data-aos-delay='500'
                              data-aos-once='true'
                              className='resume-single-list'
                            >
                              <div className='inner'>
                                <div className='heading mb-0 pb-0'>
                                  <div className='title'>
                                    <h4> Data Science Certification</h4>
                                    <span>SimpliLearn - 11/2020 - 10/2021</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-aos='fade-up'
                              data-aos-duration='500'
                              data-aos-delay='500'
                              data-aos-once='true'
                              className='resume-single-list'
                            >
                              <div className='inner'>
                                <div className='heading mb-0 pb-0'>
                                  <div className='title'>
                                    <h4> Machine Learning</h4>
                                    <span>Internshala - 06/2020 - 07/2020</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='rn-contact-area rn-section-gap section-separator'
        id='contacts'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                <span className='subtitle'>Contact</span>
                <h2 className='title'>Contact With Me</h2>
              </div>
            </div>
          </div>

          <div className='row mt--50 mt_md--40 mt_sm--40 mt-contact-sm'>
            <div className='col-lg-5'>
              <div className='contact-about-area'>
                <div className='thumbnail'>
                  <img
                    src='assets/images/site/contactus.jpg'
                    alt='contact-img'
                  />
                </div>
                <div className='title-area'>
                  <h4 className='title'>Asif Sayyed</h4>
                  <span>Software Developer</span>
                </div>
                <div className='description'>
                  <p>
                    I am available for freelance work as well as for full time
                    work. Connect with me for the further discussion.
                  </p>
                  <span className='phone'>
                    Phone: <a href='tel:+918668758730'>+91 8668758730</a>
                  </span>
                  <span className='mail'>
                    Email:{' '}
                    <a href='mailto:info@asifsayyed.com'>info@asifsayyed.com</a>
                  </span>
                </div>
                <div className='social-area'>
                  <div className='name'>FIND ME</div>
                  <div className='social-icone'>
                    <ul className='social-share d-flex liststyle'>
                      <li className='facebook'>
                        <a
                          href='https://www.linkedin.com/in/asif-sayyed/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src='assets/images/icons/linkedin.png'
                            alt='Icons Images'
                          />
                        </a>
                      </li>
                      <li className='instagram'>
                        <a
                          href='https://wa.me/8668758730'
                          target='_blanks'
                          rel='noreferrer'
                        >
                          <img
                            src='assets/images/icons/whatsapp.png'
                            alt='Icons Images'
                          />
                        </a>
                      </li>
                      <li className='linkedin'>
                        <a
                          href='https://www.instagram.com/sayyedasif444/'
                          target='_blank'
                          rel='noreferrer'
                        >
                          <img
                            src='assets/images/icons/insta.png'
                            alt='Icons Images'
                          />
                        </a>
                      </li>
                      <li className='linkedin'>
                        <a
                          href='/assets/resume.pdf'
                          target='_blank'
                          download={'AsifResume'}
                          rel='noreferrer'
                          style={{
                            position: 'relative',
                            color: '#f9004d',
                            fontSize: '45px',
                          }}
                        >
                          <DownloadOutlined
                            style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                            }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos-delay='600' className='col-lg-7 contact-input'>
              <div className='contact-form-wrapper'>
                <div className='introduce'>
                  <form
                    className='rnt-contact-form rwt-dynamic-form row'
                    id='contact-form'
                    ref={form}
                  >
                    <div className='col-lg-6'>
                      <div className='form-group'>
                        <label>Your Name</label>
                        <input
                          className='form-control form-control-lg'
                          name='contact-name'
                          id='contact-name'
                          type='text'
                          value={name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className='col-lg-6'>
                      <div className='form-group'>
                        <label>Phone Number</label>
                        <input
                          className='form-control'
                          name='contact-phone'
                          id='contact-phone'
                          type='text'
                          value={phone}
                          onChange={(e) => {
                            setphone(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <label>Email</label>
                        <input
                          className='form-control form-control-sm'
                          id='contact-email'
                          name='contact-email'
                          type='email'
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <label>subject</label>
                        <input
                          className='form-control form-control-sm'
                          id='subject'
                          name='subject'
                          type='text'
                          value={subject}
                          onChange={(e) => {
                            setsubject(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <label>Your Message</label>
                        <textarea
                          name='contact-message'
                          id='contact-message'
                          cols='30'
                          rows='10'
                          value={msg}
                          onChange={(e) => {
                            setmsg(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div className='col-lg-12'>
                      <button
                        name='button'
                        type='submit'
                        id='submit'
                        className='rn-btn'
                        onClick={(e) => {
                          e.preventDefault();
                          sendEmail();
                        }}
                      >
                        <span>SEND MESSAGE</span>
                        <i data-feather='arrow-right'></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
