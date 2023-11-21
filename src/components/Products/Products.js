import React from "react";
// import './About.css';

function Products() {
    const cardData = [
        {
          imgSrc: 'https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png',
          title: 'Card title 1',
          text: 'Some quick example text for card 1.',
          link: '#',
        },
        {
          imgSrc: 'https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png',
          title: 'Card title 2',
          text: 'Some quick example text for card 2.',
          link: '#',
        },
        {
          imgSrc: 'https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png',
          title: 'Card title 3',
          text: 'Some quick example text for card 3.',
          link: '#',
        },
        {
          imgSrc: 'https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png',
          title: 'Card title 4',
          text: 'Some quick example text for card 4.',
          link: '#',
        },
      ];
  return (
    <div className="">
      <div
        style={{ backgroundColor: "#f0f6fa" }}
        className="d-flex flex-row flex-wrap container-fluid p-5 mt-5"
      >
        <div className="flex-1 col-md-6 mt-2 ">
          <img
            src="https://www.logoheroes.net/uploads/logo/2017/09/herocom-logo.png"
            alt="hero"
            className="img-fluid"
          />
        </div>
        <div className="flex-1 col-md-6 mt-5">
          <h3 className="text-bold">Why Choose Us</h3>
          <h1 className="title">We Develop Best Solutions for Your Business</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            in aliquid suscipit odit sed sequi.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 style={{ textAlign: "center" }}>Our Product</h3>
        <h2
          className="font-weight-bold display-6"
          style={{ textAlign: "center" }}
        >
          We develop amazing products
        </h2>
        <div className="mt-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
              {cardData.map((card, index) => (
                <div className="col mb-3" key={index}>
                  <div className="card mr-md-4" style={{ width: "80%" }}>
                    <img src={card.imgSrc} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <a href={card.link} className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
