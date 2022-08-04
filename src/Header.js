import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/Images/logo.png";
import icon1 from "../src/Images/icon1.png";
import icon2 from "../src/Images/icon2.png";
import icon3 from "../src/Images/icon3.png";
import iconbtn from "../src/Images/iconbtn.png";
import doticon from "../src/Images/doticon.png";
import Modalconnect from "./Component/Modalconnect";
const Header = () => {
  return (
    <>
      <section className="wrap-1">
        <header className="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" className="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mint">
                      Mint
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/redeem">
                      Reedem
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/farms">
                      Farms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/staking">
                      Staking
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/airdrop">
                      Airdrop
                    </Link>
                  </li>
                </ul>
                <div className="icons">
                  <div className="icon1">
                    <img src={icon1} alt="" className="img-icon" />
                    <h5>$0.002</h5>
                  </div>
                  <div className="icon1">
                    <img src={icon2} alt="" className="img-icon" />
                    <h5>$0.002</h5>
                  </div>
                  <div className="icon1">
                    <img src={icon3} alt="" className="img-icon" />
                    <h5>$0.002</h5>
                  </div>
                  <div className="connect-wallet">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#Backdrop"
                    >
                      <img src={iconbtn} alt="" className="icon-btn" />
                      Connect wallet
                    </button>
                  </div>
                  <Modalconnect />

                  <div class="dropdown">
                    <button
                      className=" drop"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={doticon} alt="" className="dot img-icon" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa-brands fa-facebook-f"></i>Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://twitter.com/i/flow/login"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa-brands fa-twitter"></i>Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://github.com/login"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa-brands fa-github"></i>Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://github.com/login"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fa-solid fa-book"></i>Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </>
  );
};

export default Header;
