import React, { useState } from 'react'
import AudioFile from '../components/bg_music/soulful-bg.mpeg'
import '../components/Musicbutton.css'
import {MdMusicNote} from 'react-icons/md'
import {MdMusicOff} from 'react-icons/md'

const audio = new Audio(AudioFile);
const BgMusicButton = () => {

    const [audioState, setAudio] = useState(true)

    return (
        <div className="circle-div" >
            <button className='bg-button' type='button' onClick={() => {
                if (audioState === true) {
                    <MdMusicOff/>
                    setAudio(false);
                    audio.play();
                    console.log("Music Playing")
                }
                else {
                    <MdMusicNote/>
                    setAudio(true);
                    audio.pause();
                    console.log("Music Paused")
                }
            }}>
            <i className='fas fa-music'></i>
            {/* <i className='fas fa-volume-mute'></i> */}

            </button>
        </div >
    )
}

export default BgMusicButton