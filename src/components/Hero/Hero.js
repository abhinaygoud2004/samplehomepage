import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="d-flex flex-row flex-wrap container mt-5">
      <div className="flex-1 col-md-6 mt-5 order-md-1 order-2">
        <p className="top-title">Amazing Creative Team</p>
        <h1 className="title">We Develop Best Solutions for Your Business</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          in aliquid suscipit odit sed sequi.
        </p>
        <button className="btn btn-secondary">Full Story</button>
      </div>
      <div className="flex-1 col-md-6 mt-2 order-md-2 order-1">
        <img
          src="https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png"
          alt="hero"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

export default Hero;
