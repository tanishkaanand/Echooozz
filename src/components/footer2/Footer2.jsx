import React from 'react'
import './footer2.css'

const Footer2 = () => { 
    return (
        <div className='poora-footer'>
            <footer className='footer' data-aos="fade-bottom"
                data-aos-offset="200"
                data-aos-duration="1000">
                {/* <div className="waves"> 
                <div className="wave" id="wave1" />
                <div className="wave" id="wave2" />
                <div className="wave" id="wave3" />
                <div className="wave" id="wave4" />
            </div> */}
                <h2 className='quote' style={{ fontSize: 50, fontWeight: 50, color: 'white' }}>“Life is like a Piano. <br />What you get out of it depends on how you Play it.”</h2>
                <p>©2023 Tanishka Anand | All Rights Reserved
                <br/>Special Thanks To: Sandali Singh</p>
                <article classname='wrap'>
                    <article classname='lightings'>
                        <section classname='aurora' id="one">
                            <section classname='aurora' id="two">
                                <section classname='aurora' id="three">
                                    <section classname='aurora' id="four">
                                        <section classname='aurora' id="five"></section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </article>
                </article>
                <div className="social-icons">
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
                </div>
            </footer>
        </div >
    )
}

export default Footer2