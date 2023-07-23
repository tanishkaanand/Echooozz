import React from 'react'
import './new.css'


import Image1 from './coffin.jpg'
import Image2 from './ittisihasi.jpg'
import Image4 from './pyaarka.jpg'
import Image3 from './shape.jpg'
import Image5 from './teamo.jpg'
import Image6 from './titanic.jpg'
import Image7 from './tumhiho.jpg'
import Image8 from './soulful-logo.jpeg'


const New = () => {
    return (
        <div className='carousel-body'>
            <h1 data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-duration="1000" className='carousel-title LinedText' style={{fontSize:80, fontWeight:50, textAlign:'right'}}>Explore Our Playlists</h1>
            <div>
        <h3 data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1000" style={{ marginTop: 10, marginLeft: 80, marginRight: 80, marginBottom: 20, color: 'white', fontSize: 40, fontWeight: 40, textAlign: 'center', alignContent: 'center' }}>Variety's the very Spice of Life. That gives it all its Flavor.</h3>
        <p data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000" style={{fontSize:'20px'}}>Now, you can listen to any kind of Music depending upon your Moods!</p>
        </div>
            
            <div class="carousel_wrapper" data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-duration="1000">
        
                <div class="carousel" >
                    <div class="slide one">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPEI2sxTTsGGfW75HAou6aOGR' target='blank'>
                            <img src={Image1} />
                        </a>
                    </div> 
                    <div class="slide two">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPELPzuWvTRPNwNu8YErFqKYr' target='blank'>
                            <img src={Image2} />
                        </a>
                    </div>
                    <div class="slide three">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPEKmrQRvnGnmGwQfg2cUZywI' target='blank'>
                            <img src={Image3} />
                        </a>
                    </div>
                    <div class="slide four">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPELu3iCn9Q2DXmT7f043WHay' target='blank'>
                            <img src={Image4} />
                        </a>
                    </div>
                    <div class="slide five">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPEIjTIS4-sCvs4FN-e5bSVmh' target='blank'>
                            <img src={Image5} />
                        </a>
                    </div >
                    <div class="slide six">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPELLeLMc_SrmxhZdQBkAU96N' target='blank'>
                            <img src={Image6} />
                        </a>
                    </div >
                    <div class="slide seven">
                        <a href='https://www.youtube.com/playlist?list=PLCma2ZNcoPELrQ2jsluSpLoW0uX5iyqMG' target='blank'>
                            <img src={Image7} />
                        </a>
                    </div >
                    <div class="slide eight">
                        <a href='https://www.youtube.com/@thesoulfulecho8575' target='blank'>
                            <img src={Image8} />
                        </a>
                    </div >
                    {/* <div class="slide nine">
                        <img src={Image7} />
                    </div> */}
                </div >
            </div >

            {/* <!--
            SUN IMAGE HERE: https://chivethebrigade.files.wordpress.com/2012/03/sun-920-32.jpg
--> */}
        </div >
    )
}

export default New