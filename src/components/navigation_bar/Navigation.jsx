import React from 'react'
import { Link } from "react-router-dom";
import './navigation.css'

const Navigation = () => { 
    return (
        <div className='nav-box'>
            <ul>
                <li>
                    <a className='line' href="/">Home</a>
                </li>
                <li>
                    <a className='line' href="/best_performing">Best Performing</a>
                </li>
                <li>
                    <a className='line' href="/recent_videos">Recent Videos</a>
                </li>
                <li>
                    <a className='line' href="/popular_videos">Popular Videos</a>
                </li>
                <li>
                    <a className='line' href="/playlists">Playlists</a>
                </li>
                <li>
                    <a className='line' href="/request_a_song">Request A Song</a>
                </li>
                <li>
                    <a className='line' href="/about">About</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation