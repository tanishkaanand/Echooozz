import React from 'react'
import './home.css'

//importing components

import Nav from '../../components/nav/Nav'
import Best from '../../components/best_content/Best'
import AboutC from '../../components/about/AboutC'
import Paragraph2 from '../../components/paragraph2/Paragraph2'
import New from '../../components/newCarousel/New'
// import BgColor from '../../assets/bg_images/some_color.webp'
import Bg from '../../assets/bg_images/stars.mp4'

//importing pages 

const Home = () => {
  return (
    <div className='home'>

      <Nav />

      {/* <Piano2/> */}
      <Paragraph2 />
      <Best />
      {/* <Quote/> */}
      <New />
      <div className='stars'>
        <video className='videobg' autoPlay loop muted>
          <source src={Bg} type='video/mp4' />
        </video>
      </div>
      <AboutC />
      {/* <Footer2 /> */}

    </div>
  )
}

export default Home