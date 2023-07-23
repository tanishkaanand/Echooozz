import React from 'react'
import "./bestc.css"
import ReactPlayer from 'react-player'
import Video from './pirates.mp4'
import Image from './piraaates.jpg'
import './new-style.css'
import BG from '../../assets/bg_images/best-bg.mp4'


const BestC = () => {
    return (
        <div className='poora-best' style={{marginTop:0}}>
            {/* <h1 style={{ fontSize: 60, fontWeight: 50, textAlign: 'center', paddingBottom: 50}}>Best Performing Video</h1> */}
            <div className='best-container' style={{marginTop:0}}>

                <video className='videoTag' autoPlay loop muted>
                    <source src={BG} type='video/mp4' />
                </video>


                <div className='best-content' style={{paddingTop:150}}>
                     <div className='video'>
                        <ReactPlayer data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="1000" height={300} width={530} classname='dabba' style={{ border: '2px solid white'}} light={Image} url={Video} controls={true} onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')} />
                    </div>
                </div>
                <div className='chittha' data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="1000">
                {/* <h1>BEST Performing video</h1> */}
                    <h3 style={{textAlign:'left'}}>Pirates of the Caribbean</h3>
                    <p style={{textAlign:'left'}}> 
                    Ahoy! Have you seen the movie Pirates of the Caribbean? I got the idea to play the piano on the pirates theme from my little sister. I myself have never seen the series. For the first time when I heard this theme song, it felt like a very power-driven song. You feel it in your veins when the song, the beat begins, so I thought of playing it with my musical touch. It was a bit difficult for me to play this song as along with the piano, a strong powerful rhythm was needed, for that I played the background beats on virtual drums and then merged both of the sounds together. I myself was enjoying the BGM, but didn’t know that the audience would have loved it that much and it came to be a huge hit on the channel.
A very mischievous pirate taking the world by storm!

                         
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BestC