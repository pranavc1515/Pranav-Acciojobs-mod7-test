import React from 'react'
import "./Home.scss"
import hero from '../images/hero.svg'
// import Product from '../Products/Product'

const Home = () => {
  return (
    <div className='home'>
      <div className='banner'>
        <div className="left-section">
          <h5>SUMMER 2022</h5>
          <h1>NEW COLLECTION</h1>
          <h4>We know how large objects will act, 
              but things on a small scale.</h4>
          <div>
            <button className='btn' >SHOP NOW</button>
          </div>
        </div>
        <div className="right-section">
          <img className='hero-img' src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;