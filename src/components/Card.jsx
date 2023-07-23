import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
// import audio from '../english/tit.mp3'
import './card.css'

function Card(props) {
    return (
        <div>
            {/* <h1>English</h1> */}
            <Container data-aos="fade-bottom"
                data-aos-offset="300"
                data-aos-duration="1000" style={{ padding: '0', marginTop: '50px', width: '1000px', justifyContent: 'right'}}  >
                <Row style={{ border: '2px solid black', height: '100%'}} className='khancha'>
                    <Col lg='5' style={{ backgroundColor: 'white', border: '2px solid black', padding: '0' }}>
                        <div className="imgbox"
                            // style={{
                            //     width: '100%',
                            //     height: '100%',
                            //     objectFit: 'contain' 
                            // }}
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'white',
                            }}
                        >
                            <a href='https://www.youtube.com/@thesoulfulecho8575' target='blank'>
                                <img src={props.Image} style={{ color: 'white' }} alt='VIDEO' />
                            </a>
                        </div>
                    </Col>

                    <Col lg='7' style={{ backgroundColor: 'white', border: '2px solid black' }}>
                        <h4></h4>
                        <h4 style={{ color: 'black', textAlign: 'center', margin: 25 }}>{props.Title}</h4>
                        <p style={{ color: 'black' }}>{props.Description}</p>
                        <button className="glow-on-hover" style={{ marginLeft: "30%", marginTop: 25 }}>

                            {Audio}

                            <a

                                href={props.Audio}
                                download="Audio"

                            >
                                DOWNLOAD
                            </a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Card