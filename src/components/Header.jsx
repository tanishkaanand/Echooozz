import React, { useEffect } from 'react'
import Navigation from './navigation_bar/Navigation'
import './Header.css'
import { useState } from 'react'
import BgMusicButton from './BgMusicButton'


const Header = () => {
  var hiddenNav = <div style={{ display: 'block', padding: '2% 7%', textAlign: 'center', textDecoration: 'none' }}><Navigation /></div>
  const [DandiState, setDandi] = useState(false)

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(true);
      } else { // if scroll  up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  //// masking line className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0" ///

  return (

    <div className={`active ${show && 'hidden'}`}>
      <div className='poora'> 
        <nav
          style={{ display: 'block' }}
        >
          {/* <BgMusicButton className='music-button' /> */}
          <div className="container" style={{ display: 'block', textAlign: 'center' }}>


            <a className="navbar-brand">
              <div style={{}}>
                <span style={{ color: "#5e9693" }}>TheSoul</span>
                <span style={{ color: "#fff" }}>fulEcho</span>
              </div>
            </a>
            <span onClick={() => {
              if (DandiState === true) {
                setDandi(false)
                console.log("I was clicked --  HIDE")
              } else {
                setDandi(true)
                console.log("I was clicked -- NOT HIDE")
              }
            }} style={{ color: 'transparent', height: '0', display: 'block', borderBottom: 'solid white 5px', fontSize: '50px', cursor: 'pointer', width: '50px', alignItems: 'center', marginLeft: '640px' }}></span>

            {
              DandiState === true ?
                hiddenNav :
                null
            }
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header