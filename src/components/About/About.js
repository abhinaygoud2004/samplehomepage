import React from 'react';
// import './About.css';

function About() {
  return (
    <div className="d-flex flex-row flex-wrap container mt-5">
      <div className="flex-1 col-md-6 mt-2 ">
        <img
          src="https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png"
          alt="hero"
          className="img-fluid"
        />
      </div>
      <div className="flex-1 col-md-6 mt-5">
        <h3 className="text-bold">About us</h3>
        <h1 className="title">We Develop Best Solutions for Your Business</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          in aliquid suscipit odit sed sequi.
        </p>
        <button className="btn btn-secondary">Full Story</button>
      </div>
    </div>
  );
}

export default About;
