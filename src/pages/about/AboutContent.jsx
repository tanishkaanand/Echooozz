import React from 'react'
import "./aboutc.css"
import { Col, Container, Row } from 'react-bootstrap'

import img1 from '../../assets/bg_images/img1.jpg'
import img2 from '../../assets/bg_images/img2.jpg'
import img3 from '../../assets/bg_images/img3.jpg'
import img5 from '../../assets/bg_images/img5.jpg'

const AboutContent = () => {
  return (
    <div className='journey' style={{}}>

      <div classname='phool'>
        <h1 className='about-head LinedText' style={{ fontSize: 80, fontWeight: 50, color: 'white', paddingTop: '150px', paddingBottom: '50px' }}>About Me</h1>
        <img data-aos="fade-bottom"
          data-aos-offset="300"
          data-aos-duration="1000" src={img5} style={{ height: '500px', width: '500px', display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto' }}></img>
        <div>
          <p data-aos="fade-bottom"
            data-aos-offset="300"
            data-aos-duration="1000" style={{ fontSize: '1.2rem' }}>
            Hello guys! Tanishka Anand, here. <br />I'm a Pianist and a YouTuber. I am a Dreamer and a Wanderer. <br />I adore the Tranquillity and the Music of the lovely waves in the Oceans. <br />I love how the Waves crash on the Rocks and how the Wind brings the Scent of the Sea. <br />Someday, I would love to play Piano overlooking such a view ❤️
          </p>
        </div>
      </div>

      <h1 className='about-head LinedText' style={{ fontSize: 80, fontWeight: 50, color: 'white', paddingTop: '100px', paddingBottom: '50px', backgroundColor: 'black' }}>Journey</h1>


      <Container width={200}>
        <Row data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000" className="align-items-center text-center" style={{ marginBottom: '100px' }}>
          <Col style={{ justifyContent: 'center' }}>
            <img src={img1} style={{ height: '400px', width: '400px', objectFit: 'cover' }}></img>
          </Col>
          <Col style={{ width: '350px' }}>
            <p style={{ color: 'white', width: '450px', textAlign: 'left', fontSize: '1.2rem' }}>
              My soulful voyage began when I was in the 5th grade. It was music period and sir asked to choose an instrument. I went for the piano. Sitting in front of it, when you hit those black and white keys, the feeling you get is beyond comprehension, an utter satisfaction. It was the first time when I developed an interest in music. Piano for me was peace. He, my music teacher, taught me to play piano single-handedly. I played Piano for my school's annual functions and inter-school competitions. But then I had to change my school, and piano was left behind. The new school that I joined didn’t have instruments. I shifted my focus towards my studies and the gap prolonged.
            </p>
          </Col>
        </Row>
        <Row data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000" className="align-items-center text-center" style={{ marginBottom: '100px' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white', width: '450px', textAlign: 'right', fontSize: '1.2rem', paddingRight: '25px' }}>
              All these years, the passion for music was still there in my heart. My parents got me a Piano on my 18th birthday. This was the time when I just entered college. This time my music teacher wasn't there for me. There was no one who would stand by my side and tell me where I went wrong. I started watching Youtube Videos, learning from and rectifying my mistakes on my own. One day, I felt like I wanted to reach out to people, people other than my own friends and family, to hear, to connect with my music. I texted Vaibhav and that's the beginning of my youtube channel.
            </p>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={img2} style={{ height: '400px', width: '400px', objectFit: 'cover', marginLeft: '0', marginRight: 'auto' }}></img>
          </Col>
        </Row>
        <Row data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1000" className="align-items-center text-center">

          <Col>
            <img src={img3} style={{ height: '400px', width: '400px', objectFit: 'cover' }}></img>
          </Col>
          <Col>
            <p style={{ color: 'white', width: '450px', textAlign: 'left', fontSize: '1.2rem' }}>
              It might sound so, but uploading a video on youtube is not that easy. Simply just playing the Piano doesn’t lead to a youtube video. Select a song, learn to play it, record the audio and video separately and after this wholesome process, you need to merge them together. Though this wasn’t enough. You have to engage the people in your video. You need to captivate the audience with a thumbnail and a good description. Along with honing my piano skills, I learned these skills as well. I made the channel so that the people around me who like my music can listen to it. But I never thought that people would like these sounds so much. Thanks to the love by you all ❤️
            </p>
          </Col>
        </Row>
      </Container>


    </div>


  )
}

export default AboutContent