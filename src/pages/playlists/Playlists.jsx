import React from 'react'
import './playlists.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import English from '../../components/english/English.jsx'
import Hindi from '../../components/hindi/Hindi.jsx';
import Old from '../../components/old/Old.jsx';
import Arijit from '../../components/arijit/Arijit.jsx';
import Shorts from '../../components/shorts/Shorts.jsx';
import Challenge from '../../components/challenge/Challenge.jsx';
import Popular from '../../components/popular/Popular.jsx';

const Playlist = () => {
    return (
        <div className='bgColor' style={{ textDecoration: 'none' }}>
            {/* <video className='videoTag' autoPlay loop muted>
                <source src={BG} type='video/mp4' />
            </video> */}

            <h1 className='about-head LinedText' style={{ paddingTop: '150px', fontSize: 90, fontWeight: 80, }}>English Videos</h1>
            <English />

            <h1 className='about-head LinedText' style={{ margin: '70px', fontSize: 90, fontWeight: 80, }}>Hindi Videos</h1>
            <Hindi />

            <h1 className='about-head LinedText' style={{ margin: '70px', fontSize: 90, fontWeight: 80, }}>Arijit Videos</h1>
            <Arijit />

            <h1 className='about-head LinedText' style={{ margin: '70px', fontSize: 90, fontWeight: 80, }}>Shorts Videos</h1>
            <Shorts />

            <h1 className='about-head LinedText' style={{ margin: '70px', fontSize: 90, fontWeight: 80, }}>Old is Gold Videos</h1>
            <Old />

            <h1 className='about-head LinedText' style={{ margin: '70px', fontSize: 90, fontWeight: 80, }}>10 Days Challenge</h1>
            <Challenge />

            <h1 className='about-head LinedText' style={{ margin: '70px', fontSize: 90, fontWeight: 80, }}>Popular Videos</h1>
            <Popular />
        </div>
    )
}

export default Playlist