import React from 'react'
import './about.css'

import Image from './tanishka.png'

const AboutC = () => {
    return (
        <div className="section-about" >
        <h1 data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-duration="1000" className='about-head LinedText' style={{fontSize:80, fontWeight:50, color:'black'}}>About Us</h1>
            <div className="container-about" style={{paddingTop:'10px'}}>
                <div className="content-section" data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1000">
                    <div className="title-about">
                    </div>
                    <div className="content" style={{paddingTop:'25px'}}>
                        <h3 style={{color:'black', fontSize:35, fontWeight:50, textAlign:'center'}}>Hey Everyone! This is Tanishka Anand🎵</h3>
                        <p style={{color:'black', fontSize:18, fontWeight:50, textAlign:'center'}}>
                            I welcome you all to my world channel 'The Soulful Echo'. <br/>I'm a Pianist and a YouTuber. I am a Dreamer and a Wanderer.
                            <br/>And along with that a future Software Engineer (know that sounds very uncool)!
                            <br/>I am a self taught pianist, just a beginner right now, who arranges piano
                            covers of some of the most beautiful songs. 
                            <br/>Stay tuned with me to experience my Voyage🎵
                        </p>
                        <div className="button">
                            <a href="https://www.youtube.com/@thesoulfulecho8575/about" target='blank'>Read More</a>
                        </div>
                    </div>
                    {/* <div className="social">
                        <a href="https://www.youtube.com/@thesoulfulecho8575">
                            <i className="fab fa-youtube" />
                        </a>
                        <a href="https://www.instagram.com/the_soulfulecho/">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/tanishka-anand-9a5700202/">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="tanu182003@gmail.com">
                            <i className="fab fa-google" />
                        </a>
                    </div> */}
                </div>
                <div className="image-section" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutC