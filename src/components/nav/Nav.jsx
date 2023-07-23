import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'

function Nav() {
  return (
    <>
      <header data-aos="zoom-out"
        data-aos-offset="300"
        data-aos-duration="1000">
        {/* Navbar */}
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
          <div className="container">
            <a className="navbar-brand" href="#!">
              <span style={{ color: "#5e9693"}}>TheSoul</span>
              <span style={{ color: "#fff"}}>fulEcho</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Offer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Reference
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fas fa-shopping-cart" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div> 
          </div>
        </nav> */}
        {/* Navbar */}
        {/*Section: Design Block*/}
        <section>
          {/* Intro */}
          <div
            id="intro"
            className="bg-image vh-100"
            style={{
              backgroundImage:
                'url("https://piano-fflife.com/wp-content/uploads/2020/05/woman-playing-grand-piano-1293551-scaled-e1589127219356.jpg")'
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(250, 182, 162, 0.15)" }}
            />
          </div>
          {/* Intro */}
        </section>
        {/*Section: Design Block*/}
      </header>

    </>
  );
}

export default Nav;