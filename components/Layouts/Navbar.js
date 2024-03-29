import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
          <>
            <div id="navbar" className="navbar-area fixed-top">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link href="/">
                    <a className="navbar-brand">
                      <img src="/images/logo37h.png" alt="logo" />
                    </a>
                  </Link>

                  <button
                    onClick={this.toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto ">
                      <li className="nav-item">
                        <Link href="/">
                          <a className="nav-link">
                            <i className="bx bx-home"></i> Home
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/">
                          <a className="nav-link">
                            <i className="right-icon bx bxl-blogger"></i> Blog
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about">
                          <a className="nav-link">
                            <i className="bx bx-user"></i> About
                          </a>
                        </Link>
                      </li>

                   </ul>

                    <div className="others-options">
                      {/* <Link href="/login">
                        <a className="default-btn">
                          Log In <i className="bx bx-log-in-circle"></i>
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </>
        );
    }
}

export default Navbar;