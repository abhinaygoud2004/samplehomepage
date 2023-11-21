import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function LatestNews() {
  const members = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Web Developer',
      description: 'Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae dicta totam incidunt, illum, nulla in necessitatibus nam asperiores commodi voluptatum sapiente ducimus hic laborum rerum expedita consectetur explicabo architecto id. Quam at officia ratione! Quasi explicabo provident nihil esse. Dolores, quibusdam ducimus voluptatum unde autem dolore neque consequatur sit!',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Frontend Developer',
      description: 'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae dicta totam incidunt, illum, nulla in necessitatibus nam asperiores commodi voluptatum sapiente ducimus hic laborum rerum expedita consectetur explicabo architecto id. Quam at officia ratione! Quasi explicabo provident nihil esse. Dolores, quibusdam ducimus voluptatum unde autem dolore neque consequatur sit!',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
    {
      id: 3,
      name: 'Bob Smith',
      role: 'Backend Developer',
      description: 'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae dicta totam incidunt, illum, nulla in necessitatibus nam asperiores commodi voluptatum sapiente ducimus hic laborum rerum expedita consectetur explicabo architecto id. Quam at officia ratione! Quasi explicabo provident nihil esse. Dolores, quibusdam ducimus voluptatum unde autem dolore neque consequatur sit!',
      imgSrc: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    },
  ];

  return (
    <div style={{backgroundColor:"#f0f6fa"}} className="p-5 d-flex flex-row flex-wrap container-fluid mt-5">
      <div className="flex-1 col-md-6 mt-5 order-md-1 order-2">
        <h3 className="top-title">Latest News</h3>
        <h2 className="font-weight-bold display-6">They Are Amazing</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam in aliquid suscipit odit sed sequi.
        </p>
      </div>
      <div className="flex-1 col-md-6 mt-2 order-md-2 order-1">
        <Carousel
          slide // Enable fade effect between slides
          indicators={false} // Disable slide indicators (dots)
          nextIcon={<span aria-hidden="true" className="carousel-control-icon" style={{ color: 'black' ,fontSize:"30px"}}>&rsaquo;</span>}
          prevIcon={<span aria-hidden="true" className="carousel-control-icon" style={{ color: 'black' ,fontSize:"30px"}}>&lsaquo;</span>}
        >
          {members.map((member) => (
            <Carousel.Item key={member.id}>
              <div className="text-center">
              <p className="text-black">{member.description}</p>
                <img
                  className="rounded-circle"
                  style={{ height: '75px', width: '75px', margin: 'auto' }}
                  src={member.imgSrc}
                  alt={`Slide ${member.id}`}
                />
                <div>
                  <p >{member.name}</p>
                  <p className='text-black-50'>{member.role}</p>
                </div>
                
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default LatestNews;
