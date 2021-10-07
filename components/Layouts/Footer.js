import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
          <>
            <footer className="footer-top-area pt-100 pb-70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-widget">
                      <Link href="/" className="logo">
                        <a>
                          <img src="/images/logo.png" alt="Image" />
                        </a>
                      </Link>
                      <br />
                      <ul className="information">
                        <li className="address">
                          <span>Learning Endeavor Forever...</span>
                        </li>
                      </ul>
                      {/* <p>
                        Hi Everyone! I’m <b>Pinal Bhatt</b>.
                        <br /> I love writing code.
                        <br /> I am a Software Engineer, so yes always on
                        learning ramp!
                      </p> */}
                      <br />
                      <br />
                      <ul className="social-icon">
                        <li>
                          <a
                            href="https://www.github.com/pinalbhatt"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-github bx-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/pbdesk"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-twitter bx-sm"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/pinalbhatt"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-linkedin bx-sm"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-widget">
                      <h3>Links</h3>
                      <ul>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="right-icon bx bx-home"></i>
                              &nbsp;Home
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details">
                            <a>
                              <i className="right-icon bx bxl-blogger"></i>
                              &nbsp;Blog
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details">
                            <a>
                              <i className="right-icon bx bx-user"></i>
                              &nbsp;About
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/service-details">
                            <a>
                              <i className="right-icon bx bxs-contact"></i>
                              &nbsp;contact
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-widget">
                      <h3>Me</h3>

                      <ul className="information">
                        <li className="address">
                          <i className="flaticon-call"></i>
                          <span>Phone</span>
                          +1 000-000-0000
                        </li>

                        <li className="address">
                          <i className="flaticon-envelope"></i>
                          <span>Email</span>
                          self@pbdesk.com
                        </li>

                        <li className="address">
                          <i className="flaticon-maps-and-flags"></i>
                          <span>Location</span>
                          NY/NJ, USA
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-shape">
                <img src="/images/shape/footer-shape-one.png" alt="Image" />
                <img src="/images/shape/footer-shape-two.png" alt="Image" />
              </div>
            </footer>

            {/* Footer Bottom Area   */}
            <footer className="footer-bottom-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="copy-right">
                      <p>PBDesk.Com</p>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="privacy">
                      <ul>
                        <li>
                          <Link href="/terms-conditions">
                            <a>Terms & Conditions</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="designed">
                      <p>
                        With <i className="bx bx-heart"></i> from the desk of{" "}
                        <b>Pinal Bhatt</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </>
        );
    }
}

export default Footer;