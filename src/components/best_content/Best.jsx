import React from 'react'
import "./best.css"
import ReactPlayer from 'react-player'
import Video from './pirates.mp4'
import Image from './piraaates.jpg'

const Best = () => {
  return (
    <div>
      {/* <hr /> */}
      <div className='best'>

        <h1 data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-duration="1000" className='title-best LinedText' style={{ fontSize: 80, fontWeight: 50 , color:'white'}}>Best Performing</h1>
        {/* <hr style={{border:'2px solid black'}}></hr> */}
        <h3 data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1000" style={{ marginTop: 50, marginLeft: 80, marginRight: 80, marginBottom: 20, color: 'white', fontSize: 50, fontWeight: 50, textAlign: 'center', alignContent: 'center' }}>
        Pirates Of The Carribean<br />
          {/* Hope you enjoyed it❤️
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  */}
        </h3>
        <p data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000" style={{fontSize:'20px'}}>The Pirates Theme Song is my Personal Favorite. It’s a power-box, an energizer!<br/>And also loved by you All ❤️</p>

        <div className='video'>
          <div style={{ margin: '2% 7% 6%' }} className='video-item'>
            <ReactPlayer data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-duration="1000" width={1000} height={550} light={Image} url={Video} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} />
        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Best
