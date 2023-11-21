import React from 'react';
// import './Service.css';

function Service() {
  return (
    <div className="d-flex flex-row flex-wrap container mt-5">
     <div className="flex-1 col-md-6 mt-5 order-md-1 order-2">
  <div>
    <h2>Service</h2>
    <h3>Industry standard service</h3>
  </div>
  <div className="d-md-flex flex-md-row flex-column mb-4">
    <div className="col-md-6 mb-md-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem officiis in aut excepturi iure? Sint ab voluptas ex reiciendis?</div>
    <div className="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi exercitationem, eaque aut nisi saepe sapiente nihil dolores optio maxime.</div>
  </div>
  <div className="d-md-flex flex-md-row flex-column">
    <div className="col-md-6 mb-md-0 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At exercitationem officiis in aut excepturi iure? Sint ab voluptas ex reiciendis?</div>
    <div className="col-md-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi exercitationem, eaque aut nisi saepe sapiente nihil dolores optio maxime.</div>
  </div>
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

export default Service;
