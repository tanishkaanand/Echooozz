import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/home/Home'
import Navigation from './components/navigation_bar/Navigation'

import Recent from './pages/recent/Recent'
import Popular from './pages/popular/Popular'
import AboutContent from './pages/about/AboutContent'
import Best from './components/best_content/BestC'
import Playlist from './pages/playlists/Playlists'
import Request from './pages/request/Requestc'
import Header from './components/Header';
import Footer2 from './components/footer2/Footer2';
import BgMusicButton from './components/BgMusicButton';

const App = () => {
  return (
    <>
      {/* <Home /> */}
      {/* <Navigation /> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/playlists' element={<Playlist />} />
          <Route path='/request_a_song' element={<Request />} />
          <Route path='/best_performing' element={<Best />} />
          <Route path='/recent_videos' element={<Recent />} />
          <Route path='/popular_videos' element={<Popular />} />
          <Route path='/about' element={<AboutContent />} />
        </Routes>
      </BrowserRouter>
      <BgMusicButton />
      <Footer2 />
    </>
  )
}

export default App