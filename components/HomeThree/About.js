import React, { Component } from 'react';
import Link from 'next/link';
import MeCard from "../Common/MeCard";

class About extends Component {
    render() {
        return (
          <section className="about-area pt-50">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <MeCard />
                  {/* <div className="about-img">
                                <img src="/images/about-img-three.png" alt="Image" />
                            </div> */}
                </div>

                <div className="col-lg-6">
                  <div className="about-content">
                    <span>About Me</span>
                    <h2>Welcome to my desk!!!</h2>
                    <p>
                      {" "}
                      Hello! I&apos;m <b>Pinal Bhatt</b>, I&apos;m Software
                      Engineer, and I love writing code!
                      <br />
                      So, yes! I am always on learning ramp! On this site you’ll
                      find interesting posts, articles, tutorials, videos, news
                      updates and links on Programming, Microservices, Cloud &
                      Serverless, JavaScript, NodeJS, TypeScript, Vue, Angular,
                      React, Kafka and other random thoughts and opinions. And
                      ofcourse my tips for healthy eating and leaving! After all{" "}
                      <b>Health Is Wealth !!! :)</b>”
                    </p>

                    {/* <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <ul>
                          <li>
                            <i className="flaticon-checked"></i>
                            Advanced caching
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            Unlimited applications
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            PHP 7 ready transfer
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <ul>
                          <li>
                            <i className="flaticon-checked"></i>
                            PHP ready serves
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            24/7 free extra support
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            Optimized stack
                          </li>
                        </ul>
                      </div>
                    </div> */}

                    <Link href="/about">
                      <a className="default-btn">
                        <i className="bx bx-user"></i> &nbsp;About Me
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default About;
