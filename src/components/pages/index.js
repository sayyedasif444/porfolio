import React, { useState } from "react";
import { useRef } from "react";
import { message } from "antd";
import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const Index = () => {
  const form = useRef();

  const [loader, setloader] = useState(false);

  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [msg, setmsg] = useState("");

  const sendEmail = async () => {
    if (name !== "" && email !== "") {
      setloader(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_MAIL,
          process.env.REACT_APP_TEMPLATE_MAIL,
          form.current,
          process.env.REACT_APP_SERVICE_PUBLIC_KEY
        )
        .then(
          (result) => {
            message.success("Query submitted! will get back to you ASAP.");
            setloader(false);
            setemail("");
            setname("");
            setsubject("");
            setmsg("");
            setphone("");
          },
          (error) => {
            setloader(false);
            message.error("Something went wrong! Please try again.");
          }
        );
    } else {
      message.error("Please fill atleast name and email to proceed");
    }
  };

  return (
    <main className="main-page-wrapper">
      <div id="home" className="rn-slider-area">
        <div className="slide slider-style-1">
          <div className="container">
            <div className="row row--30 align-items-center">
              <div className="order-2 order-lg-1 col-lg-8 mt_md--20 mt_sm--20 mt_lg--20">
                <div className="content">
                  <div className="inner mb--40">
                    <span className="subtitle">Welcome to my world</span>
                    <h1 className="title">
                      Hi, I’m <span>Asif Sayyed,</span>
                      <br />
                      <span className="header-caption" id="page-top">
                        <span className="cd-headline clip is-full-width">
                          <span className="cd-words-wrapper">
                            <b className="is-visible">Software Developer.</b>
                            <b className="is-hidden">Mobile App Developer.</b>
                            <b className="is-hidden">UI/UX Developer.</b>
                            <b className="is-hidden">Graphic Designer.</b>
                            <b className="is-hidden">Data Analytics.</b>
                          </span>
                        </span>
                      </span>
                    </h1>
                    <div>
                      <p className="description">
                        Skilled digital transformation professional with years
                        of experience helping businesses achieve remarkable
                        growth and success. With expertise in identifying
                        opportunities, implementing strategies, and leveraging
                        data-driven insights, I can help your business reach its
                        goals
                      </p>
                    </div>
                    <a
                      className="rn-btn btn-small text-center  mt--30 mb--0"
                      style={{ width: "180px", fontSize: "90%" }}
                      href="#contacts"
                      onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                          top: document.querySelector("#contacts").offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Let's Talk
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="skill-share-inner">
                        <span className="title">best skill on</span>
                        <ul className="skill-share d-flex liststyle">
                          <li title="Javascript">
                            <img
                              src="assets/images/icons/javascript.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li title="React">
                            <img
                              src="assets/images/icons/react.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li title="Nodejs">
                            <img
                              src="assets/images/icons/node.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li title="HTML/CSS">
                            <img
                              src="assets/images/icons/css.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li title="Laravel">
                            <img
                              src="assets/images/icons/laravel.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li title="Python">
                            <img
                              src="assets/images/icons/python.png"
                              alt="Icons Images"
                            />
                          </li>
                          <li title="Excel">
                            <img
                              src="assets/images/icons/excel.png"
                              alt="Icons Images"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="social-share-inner-left">
                        <span className="title">find me</span>
                        <ul className="social-share d-flex liststyle">
                          <li className="facebook">
                            <a
                              href="https://www.linkedin.com/in/asif-sayyed/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="assets/images/icons/linkedin.png"
                                alt="Icons Images"
                              />
                            </a>
                          </li>
                          <li className="instagram">
                            <a
                              href="https://wa.me/9028361696"
                              target="_blanks"
                              rel="noreferrer"
                            >
                              <img
                                src="assets/images/icons/whatsapp.png"
                                alt="Icons Images"
                              />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a
                              href="https://www.instagram.com/sayyedasif444/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="assets/images/icons/insta.png"
                                alt="Icons Images"
                              />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a
                              href="https://github.com/sayyedasif444"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="assets/images/icons/github.png"
                                alt="Icons Images"
                              />
                            </a>
                          </li>
                          <li className="linkedin">
                            <a
                              href="/assets/Asif's Resume.pdf"
                              target="_blank"
                              download={"AsifResume"}
                              rel="noreferrer"
                              style={{
                                position: "relative",
                                color: "#f9004d",
                                fontSize: "45px",
                              }}
                            >
                              <DownloadOutlined
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
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
              <div className="order-1 order-lg-2 col-lg-4">
                <div className="thumbnail">
                  <div className="inner">
                    <img
                      src="/assets/images/site/homeImage.jpg"
                      alt="Digital Illusion"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rn-service-area rn-section-gap section-separator"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <span className="subtitle">Features</span>
                <h2 className="title">What I Do</h2>
              </div>
            </div>
          </div>
          <div className="row row--25 mt_md--10 mt_sm--10">
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-code"
                    >
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        Web Development
                      </a>
                    </h4>
                    <p className="description">
                      Expertise in designing and building customized Web
                      solutions that meet the specific needs of businesses,
                      enabling them to enhance their operations, online reach
                      and achieve their digital transformation goals
                    </p>
                    <a
                      className="read-more-button"
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className="feather-arrow-right"
                        style={{ visibility: "hidden" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a
                  className="over-link"
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-smartphone"
                    >
                      <rect
                        x="5"
                        y="2"
                        width="14"
                        height="20"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        Mobile App
                      </a>
                    </h4>
                    <p className="description">
                      With a focus on intuitive user interfaces, seamless
                      performance, and compatibility across platforms, I deliver
                      mobile app solutions that drive business success in the
                      ever-growing mobile market
                    </p>
                    <a
                      className="read-more-button"
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className="feather-arrow-right"
                        style={{ visibility: "hidden" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a
                  className="over-link"
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitch"
                    >
                      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        UI/UX
                      </a>
                    </h4>
                    <p className="description">
                      With a deep understanding of user behavior and modern
                      design principles, I deliver UI/UX solutions that enhance
                      customer satisfaction and drive business growth
                    </p>
                    <a
                      className="read-more-button"
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className="feather-arrow-right"
                        style={{ visibility: "hidden" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a
                  className="over-link"
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-pen-tool"
                    >
                      <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                      <path d="M2 2l7.586 7.586"></path>
                      <circle cx="11" cy="11" r="2"></circle>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        Graphic Design
                      </a>
                    </h4>
                    <p className="description">
                      Experience in creating visually stunning designs that
                      effectively communicate a brand's message and captivate
                      its audience
                    </p>
                    <a
                      className="read-more-button"
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className="feather-arrow-right"
                        style={{ visibility: "hidden" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a
                  className="over-link"
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-activity"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        Data Analytics
                      </a>
                    </h4>
                    <p className="description">
                      Through advanced data analysis techniques, visualization,
                      and reporting, I deliver actionable intelligence that
                      drives business growth and improves performance
                    </p>
                    <a
                      className="read-more-button"
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className="feather-arrow-right"
                        style={{ visibility: "hidden" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a
                  className="over-link"
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  {" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30">
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-tv"
                    >
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="15"
                        rx="2"
                        ry="2"
                      ></rect>
                      <polyline points="17 2 12 7 7 2"></polyline>
                    </svg>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#!" onClick={(e) => e.preventDefault()}>
                        Desktop Application
                      </a>
                    </h4>
                    <p className="description">
                      Skilled in crafting custom desktop applications tailored
                      to businesses' specific needs. I help optimize operations
                      and expand digital presence, ensuring precise achievement
                      of software goals
                    </p>
                    <a
                      className="read-more-button"
                      href="#!"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i
                        className="feather-arrow-right"
                        style={{ visibility: "hidden" }}
                      ></i>
                    </a>
                  </div>
                </div>
                <a
                  className="over-link"
                  href="#!"
                  onClick={(e) => e.preventDefault()}
                >
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rn-resume-area rn-section-gap section-separator"
        id="resume"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">5+ Years of Experience</span>
                <h2 className="title">My Resume </h2>
              </div>
            </div>
          </div>
          <div className="row mt--45">
            <div className="col-lg-12">
              <ul
                className="rn-nav-list nav nav-tabs"
                id="myTabs"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link "
                    id="education-tab"
                    data-bs-toggle="tab"
                    href="#education"
                    role="tab"
                    aria-controls="education"
                    aria-selected="true"
                  >
                    education
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    id="professional-tab"
                    data-bs-toggle="tab"
                    href="#professional"
                    role="tab"
                    aria-controls="professional"
                    aria-selected="false"
                  >
                    professional Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="experience-tab"
                    data-bs-toggle="tab"
                    href="#experience"
                    role="tab"
                    aria-controls="experience"
                    aria-selected="false"
                  >
                    experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="interview-tab"
                    data-bs-toggle="tab"
                    href="#interview"
                    role="tab"
                    aria-controls="interview"
                    aria-selected="false"
                  >
                    Certification
                  </a>
                </li>
              </ul>
              <div className="rn-nav-content tab-content" id="myTabContents">
                <div
                  className="tab-pane show  fade single-tab-area"
                  id="education"
                  role="tabpanel"
                  aria-labelledby="education-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="content">
                          <span className="subtitle">2017 - 2020</span>
                          <h4 className="maintitle">Masters</h4>
                          <div className="experience-list">
                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading pb-0">
                                  <div className="title">
                                    <h4>Masters in Computer Application</h4>
                                    <span className="mb-0 pb-0">
                                      Allana Insititue of Management Sciences
                                    </span>
                                  </div>
                                </div>
                                <p className="description">
                                  I hold a Master's degree in Computer
                                  Application, achieving distinction. This
                                  reflects my exceptional academic performance
                                  and expertise in the field. Throughout my
                                  academic journey, I've completed challenging
                                  projects, honing my skills and expanding my
                                  knowledge base.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                        <div className="content">
                          <span className="subtitle">2014 - 2017</span>
                          <h4 className="maintitle">Bachelors</h4>
                          <div className="experience-list">
                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading pb-0">
                                  <div className="title">
                                    <h4>Bachelors in computer application</h4>
                                    <span className="mb-0 pb-0">
                                      Maeers' MIT-SOM College, Kothrud
                                    </span>
                                  </div>
                                </div>
                                <p className="description">
                                  I earned my Bachelor's in Computer Application
                                  with notable achievements, including
                                  challenging projects in web and mobile
                                  development, database management, and software
                                  engineering. These experiences laid a solid
                                  foundation for my future endeavors.
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
                  className="tab-pane fade "
                  id="professional"
                  role="tabpanel"
                  aria-labelledby="professional-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row row--40">
                      <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                        <div className="progress-wrapper">
                          <div className="content">
                            <h4 className="maintitle">Development Skill</h4>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">HTML/CSS</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  style={{ width: "95%" }}
                                  role="progressbar"
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">95%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">JAVASCRIPT</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "95%" }}
                                  role="progressbar"
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">95%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                REACT / Vue / jQuery
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "90%" }}
                                  role="progressbar"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">90%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                NODE.JS / EXPRESS.JS
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "85%" }}
                                  role="progressbar"
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">85%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                PHP / LARAVEL
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "70%" }}
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">70%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">Python</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "70%" }}
                                  role="progressbar"
                                  aria-valuenow="70"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">70%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">THREE.JS</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "75%" }}
                                  role="progressbar"
                                  aria-valuenow="75"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">75%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">WORDPRESS</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "75%" }}
                                  role="progressbar"
                                  aria-valuenow="65"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">75%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                Database (SQL / MONGODB / MYSQL / POSTGRESQL)
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "80%" }}
                                  role="progressbar"
                                  aria-valuenow="65"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">80%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                Electron.JS
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "80%" }}
                                  role="progressbar"
                                  aria-valuenow="65"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">80%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                Mobile App (Flutter and React Native)
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "80%" }}
                                  role="progressbar"
                                  aria-valuenow="65"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">80%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                GIT / Docker / Server
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.7s"
                                  data-wow-delay=".5s"
                                  style={{ width: "90%" }}
                                  role="progressbar"
                                  aria-valuenow="65"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">90%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="progress-wrapper">
                          <div className="content">
                            <h4 className="maintitle">
                              Design & Analytical Skill
                            </h4>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">PHOTOSHOP</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">80%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">
                                ILLUSTRATOR
                              </h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">80%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">FIGMA</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">70%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">ADOBE XD</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">70%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">EXCEL</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">75%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">POWER BI</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">65%</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-charts">
                              <h6 className="heading heading-h6">TABLEU</h6>
                              <div className="progress">
                                <div
                                  className="progress-bar wow fadeInLeft"
                                  data-wow-duration="0.5s"
                                  data-wow-delay=".3s"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow="85"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                >
                                  <span className="percent-label">65%</span>
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
                  className="tab-pane show active fade single-tab-area"
                  id="experience"
                  role="tabpanel"
                  aria-labelledby="experience-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="content">
                          <span className="subtitle">Aug-2020 - Current</span>
                          <h4 className="maintitle">Momenttext AI</h4>
                          <div className="experience-list">
                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading pb-0">
                                  <div className="title">
                                    <h4>Software Developer</h4>
                                    <span className="mb-0 pb-0">
                                      Delhi, Inida (Remote)
                                    </span>
                                  </div>
                                </div>
                                <div className="description">
                                  <ul>
                                    <li>
                                      Developed interactive UI experiences and
                                      streamlined processes, including RESTful
                                      APIs
                                    </li>
                                    <li>
                                      Transformed client requirements into
                                      comprehensive solutions
                                    </li>
                                    <li>
                                      Took a lead role in frontend tasks,
                                      focusing on design and development, while
                                      also contributing to backend
                                      implementation when required for cohesive
                                      functionality
                                    </li>
                                    <li>
                                      Leveraged Docker for streamlined
                                      deployment processes, enhancing efficiency
                                      and scalability
                                    </li>
                                    <li>Managed version control using Git</li>
                                    <li>
                                      Ensured high-quality UI designs, enhancing
                                      user experience and meeting project
                                      deadlines effectively
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                        <div className="content">
                          <span className="subtitle">Jan-2018 - Jul-2020</span>
                          <h4 className="maintitle">Parallax Developers</h4>
                          <div className="experience-list">
                            <div className="resume-single-list">
                              <div className="inner">
                                <div className="heading pb-0">
                                  <div className="title">
                                    <h4>Software Developer</h4>
                                    <span className="mb-0 pb-0">
                                      Pune, India (Freelance)
                                    </span>
                                  </div>
                                </div>
                                <div className="description">
                                  <ul>
                                    <li>
                                      Offered web, mobile app development, and
                                      graphic design services
                                    </li>
                                    <li>
                                      Developed responsive web and mobile apps
                                      using HTML, CSS, JavaScript, ReactJS,
                                      Laravel, PHP, Python, and Flutter
                                    </li>
                                    <li>
                                      Crafted custom graphics, logos, and
                                      illustrations for branding
                                    </li>
                                    <li>
                                      Efficiently managed multiple projects,
                                      ensuring timely delivery
                                    </li>
                                    <li>
                                      Committed to delivering high-quality work
                                      with 100% dedication
                                    </li>
                                    <li>
                                      Provided comprehensive solutions meeting
                                      clients' diverse needs
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
                  className="tab-pane fade"
                  id="interview"
                  role="tabpanel"
                  aria-labelledby="interview-tab"
                >
                  <div className="personal-experience-inner mt--40">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="content">
                          <h4 className="maintitle">Cetifications</h4>
                          <div className="experience-list">
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="300"
                              data-aos-once="true"
                              className="resume-single-list"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                window.open(
                                  "https://drive.google.com/file/d/1pyWooRd56j_4rLlfzJcwIJaKMIxArOfj/view",
                                  "_blank"
                                );
                              }}
                            >
                              <div className="inner">
                                <div className="heading mb-0 pb-0">
                                  <div className="title">
                                    <h4>Full Stack Course</h4>
                                    <span>Coding Ninja - 1/2023 - 10/2023</span>
                                  </div>
                                </div>
                                <LinkOutlined
                                  className="hoverNewClass"
                                  style={{
                                    fontSize: "26px",
                                    position: "absolute",
                                    right: "30px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              </div>
                            </div>
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="500"
                              data-aos-once="true"
                              className="resume-single-list"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                window.open(
                                  "https://drive.google.com/file/d/142XFyDsgGPJUfM9Vs-eOtbxAX-uS74Rn/view",
                                  "_blank"
                                );
                              }}
                            >
                              <div className="inner">
                                <div className="heading mb-0 pb-0">
                                  <div className="title">
                                    <h4> Data Science Certification</h4>
                                    <span>SimpliLearn - 11/2020 - 10/2021</span>
                                  </div>
                                </div>
                                <LinkOutlined
                                  className="hoverNewClass"
                                  style={{
                                    fontSize: "26px",
                                    position: "absolute",
                                    right: "30px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              </div>
                            </div>

                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="300"
                              data-aos-once="true"
                              className="resume-single-list"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                window.open(
                                  "https://drive.google.com/file/d/0ByyX33N5H3okamE4RWRqaXQ1c1k/view?resourcekey=0-l20RIGI-D8_yGJqj6PVcTA",
                                  "_blank"
                                );
                              }}
                            >
                              <div className="inner">
                                <div className="heading mb-0 pb-0">
                                  <div className="title">
                                    <h4>
                                      Web Developement and Graphic Designing
                                    </h4>
                                    <span>
                                      Arena Animation - 12/2014 - 03/2016
                                    </span>
                                  </div>
                                </div>
                                <LinkOutlined
                                  className="hoverNewClass"
                                  style={{
                                    fontSize: "26px",
                                    position: "absolute",
                                    right: "30px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                        <div className="content">
                          <h4
                            className="maintitle"
                            style={{ visibility: "hidden" }}
                          >
                            Job Experience
                          </h4>
                          <div className="experience-list">
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="500"
                              data-aos-once="true"
                              className="resume-single-list"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                window.open(
                                  "https://drive.google.com/file/d/1odGtYjex9i9SIOkJ_xCHejmu85ygS4Rv/view",
                                  "_blank"
                                );
                              }}
                            >
                              <div className="inner">
                                <div className="heading mb-0 pb-0">
                                  <div className="title">
                                    <h4> MERN Stack Certification</h4>
                                    <span>Udemy - 02/2021 - 04/2021</span>
                                  </div>
                                </div>
                                <LinkOutlined
                                  className="hoverNewClass"
                                  style={{
                                    fontSize: "26px",
                                    position: "absolute",
                                    right: "30px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                  }}
                                />
                              </div>
                            </div>
                            <div
                              data-aos="fade-up"
                              data-aos-duration="500"
                              data-aos-delay="500"
                              data-aos-once="true"
                              className="resume-single-list"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                window.open(
                                  "https://drive.google.com/file/d/1V8nkBS-ZfXOmjbmo0iQtXK3JZaNr3PK4/view",
                                  "_blank"
                                );
                              }}
                            >
                              <div className="inner">
                                <div className="heading mb-0 pb-0">
                                  <div className="title">
                                    <h4> Machine Learning</h4>
                                    <span>Internshala - 06/2020 - 07/2020</span>
                                  </div>
                                </div>
                                <LinkOutlined
                                  className="hoverNewClass"
                                  style={{
                                    fontSize: "26px",
                                    position: "absolute",
                                    right: "30px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                  }}
                                />
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
        className="rn-contact-area rn-section-gap section-separator"
        id="contacts"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle">Contact</span>
                <h2 className="title">Contact With Me</h2>
              </div>
            </div>
          </div>

          <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
            <div className="col-lg-5">
              <div className="contact-about-area">
                <div className="thumbnail" style={{ maxHeight: "220px" }}>
                  <img
                    src="assets/images/contact1.png"
                    alt="contact-img"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="title-area">
                  <h4 className="title">Asif Sayyed</h4>
                  <span>Software Developer</span>
                </div>
                <div className="description">
                  <p>
                    I'm open to freelance projects and considering full-time
                    roles. Reach out to discuss collaborations and how my skills
                    fit your needs. Let's connect to achieve remarkable outcomes
                    together
                  </p>
                  <span className="phone">
                    Phone: <a href="tel:+919028361696">+91 9028361696</a>
                  </span>
                  <span className="mail">
                    Email:{" "}
                    <a href="mailto:info@sayyedasif.com">info@sayyedasif.com</a>
                  </span>
                </div>
                <div className="social-area">
                  <div className="name">FIND ME</div>
                  <div className="social-icone">
                    <ul className="social-share d-flex liststyle">
                      <li className="facebook">
                        <a
                          href="https://www.linkedin.com/in/asif-sayyed/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="assets/images/icons/linkedin.png"
                            alt="Icons Images"
                          />
                        </a>
                      </li>
                      <li className="instagram">
                        <a
                          href="https://wa.me/9028361696"
                          target="_blanks"
                          rel="noreferrer"
                        >
                          <img
                            src="assets/images/icons/whatsapp.png"
                            alt="Icons Images"
                          />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a
                          href="https://www.instagram.com/sayyedasif444/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="assets/images/icons/insta.png"
                            alt="Icons Images"
                          />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a
                          href="https://github.com/sayyedasif444"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="assets/images/icons/github.png"
                            alt="Icons Images"
                          />
                        </a>
                      </li>
                      <li className="linkedin">
                        <a
                          href="/assets/Asif's Resume.pdf"
                          target="_blank"
                          download={"AsifResume"}
                          rel="noreferrer"
                          style={{
                            position: "relative",
                            color: "#f9004d",
                            fontSize: "45px",
                          }}
                        >
                          <DownloadOutlined
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos-delay="600" className="col-lg-7 contact-input">
              <div className="contact-form-wrapper">
                <div className="introduce">
                  <form
                    className="rnt-contact-form rwt-dynamic-form row"
                    id="contact-form"
                    ref={form}
                  >
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          className="form-control form-control-lg"
                          name="name"
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          className="form-control"
                          name="phone"
                          id="phone"
                          type="text"
                          value={phone}
                          onChange={(e) => {
                            setphone(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control form-control-sm"
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>subject</label>
                        <input
                          className="form-control form-control-sm"
                          id="subject"
                          name="subject"
                          type="text"
                          value={subject}
                          onChange={(e) => {
                            setsubject(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          value={msg}
                          onChange={(e) => {
                            setmsg(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        name="button"
                        type="submit"
                        id="submit"
                        disabled={loader}
                        className="rn-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          sendEmail();
                        }}
                      >
                        <span>{loader ? "SENDING... " : "SEND MESSAGE"} </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-arrow-right"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
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
