import React from 'react'
import "./TeamMembers.css"
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function TeamMembers() {
    const TeamMembers=[
        {
            name:"virat",
            role:"cricketer",
            insta:"https://www.instagram.com/virat.kohli/",
            twitter:"https://www.instagram.com/virat.kohli/",
            linkedin:"https://www.instagram.com/virat.kohli/",
            imgSrc:"https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png"
        },
        {
            name:"virat",
            role:"cricketer",
            insta:"https://www.instagram.com/virat.kohli/",
            twitter:"https://www.instagram.com/virat.kohli/",
            linkedin:"https://www.instagram.com/virat.kohli/",
            imgSrc:"https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png"
        },
        {
            name:"virat",
            role:"cricketer",
            insta:"https://www.instagram.com/virat.kohli/",
            twitter:"https://www.instagram.com/virat.kohli/",
            linkedin:"https://www.instagram.com/virat.kohli/",
            imgSrc:"https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png"
        },
        {
            name:"virat",
            role:"cricketer",
            insta:"https://www.instagram.com/virat.kohli/",
            twitter:"https://www.instagram.com/virat.kohli/",
            linkedin:"https://www.instagram.com/virat.kohli/",
            imgSrc:"https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png"
        },
        {
            name:"virat",
            role:"cricketer",
            insta:"https://www.instagram.com/virat.kohli/",
            twitter:"https://www.instagram.com/virat.kohli/",
            linkedin:"https://www.instagram.com/virat.kohli/",
            imgSrc:"https://www.dlf.pt/dfpng/middlepng/449-4499095_virat-kohli-hd-png-download.png"
        }
    ]
  return (
    <div className='container mt-4'>
        <h3>Team Members</h3>
        <h2  className="font-weight-bold display-6">Amazing Team</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ad aperiam dignissimos assumenda, aliquid ex quas suscipit nemo nobis in quia? Reprehenderit, cum expedita fugiat, ipsum dolores iste beatae architecto dolor tempora veritatis eligendi voluptate saepe magnam deleniti id excepturi?</p>
        <div className="mt-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3">
              {TeamMembers.map((card, index) => (
                <div className="col mb-3" key={index}>
                  <div className="card mr-md-4 border-0" style={{ width: "80%" }}>
                    <div className="card-body">
                    <img src={card.imgSrc} alt="" className="card-img-top" />
                    <div className="hover-icons">
                      <a target={'_blank'} href={card.insta} className="icon"><FaInstagram /></a>
                      <a target={'_blank'} href={card.twitter} className="icon"><FaTwitter /></a>
                      <a target={'_blank'} href={card.linkedin} className="icon"><FaLinkedin /></a>
                    </div>
                    </div>
                    <div className="card-footer">
                        <h3 className='text-center'>{card.name}</h3>
                        <h4 className='text-center text-black-50'>{card.role}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default TeamMembers