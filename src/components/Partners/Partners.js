import React from "react";

function Partners() {
  let partners = [
    {
      imgSrc: "https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png",
    },
    {
        imgSrc: "https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png",
      },
      {
        imgSrc: "https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png",
      },
      {
        imgSrc: "https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png",
      },
      {
        imgSrc: "https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png",
      },
      {
        imgSrc: "https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png",
      },
  ];
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h3>Partners</h3>
        <h2 className="font-weight-bold display-6">Trusted By Brands</h2>
        <p className="lead ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          molestias repellat autem commodi sed sapiente rem praesentium mollitia
          blanditiis dolorum. Soluta dicta quam voluptatum! Tempora, fugit!
          Animi repellat enim explicabo minima ea maiores rem ducimus error quas
          odit esse, est quam reprehenderit dolores quos recusandae voluptatem
          praesentium in? Ducimus, tempore!
        </p>
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4">
            {partners.map((card, index) => (
              <div className="col mb-3" key={index}>
                <div className="card border-0">
                  <div className="card-body">
                    <img src={card.imgSrc} alt="" className="" width={"220px"} height={"250px"}/>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
