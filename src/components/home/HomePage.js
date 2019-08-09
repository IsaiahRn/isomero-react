import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="bg">
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
             id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="" className="btn btn-primary btn-lg">
              Home
          </Link>
          <Link to="courses" className="btn btn-primary btn-lg">
              Courses
          </Link>
          </div>
        </div>
      </div>
    </nav>

  <div style={{alignContent: 'center', paddingLeft: '500px', paddingTop: '230px', color: '#18F5F5'}}>
    <h1 style={{fontSize: '75px', marginLeft: '100px'}}>Isomero</h1>
    <p style={{fontSize: '20px'}}>The quieter you become, the more you can learn</p>
    <Link to="courses" className="btn btn-primary btn-lg" style={{marginLeft: '160px'}}>
      Get Started
    </Link>
  </div>
  </div>
);

export default HomePage;
