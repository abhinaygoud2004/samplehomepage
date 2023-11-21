import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Service from '../Service/Service'
import Products from '../Products/Products'
import Features from '../Features/Features'
import LatestNews from '../LatestNews/LatestNews'
import TeamMembers from '../TeamMembers/TeamMembers'
import Partners from '../Partners/Partners'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Service/>
        <Products/>
        <Features/>
        <LatestNews/>
        <TeamMembers/>
        <Partners/>
        {/*
        <Blog/>
        <Contact/> */}
    </div>
  )
}

export default Home