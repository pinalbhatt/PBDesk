import React, { Component } from "react";
import Link from "next/link";

class MeCard extends Component {
  render() {
    return (
      <section className="team-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div className="single-team active">
                <div className="team-single-img">
                  <img src="/images/PBR.jpg" alt="Image" />

                  <div className="team-img">
                    <img src="/images/team/team-shape.png" alt="Image" />
                  </div>
                </div>

                <div className="team-content">
                  <h3>Pinal Bhatt</h3>
                  <span>Software Engineer</span>

                  <ul>
                    <li>
                      <a
                        href="https://www.github.com/pinalbhatt"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-github bx-md"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/pbdesk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter bx-md"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/pinalbhatt"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin bx-md"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MeCard;
