import React, { useEffect, useState } from 'react'
// import videos from './eng'
import Card from '../../components/Card'
import './popular.css'
import audios from './popo'

// AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM

const PopularPage = () => {

    let link = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwBcvtd0BJO8svT64-ZuyaQ&maxResults=5&order=viewCount&type=video&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM'

    const [videos, setVideos] = useState([]);

    async function getVideos() {
        await fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log("\n\nTanishka Anand");
                console.log(data);
                setVideos(data.items);
            })
            .catch(error => {
                //handle error
                console.log("ERROR");
                console.log(error);
            });
    }

    useEffect(getVideos, []);

    return (
        <div className='pops'>
            <h1 className='about-head LinedText' style={{fontSize: 90, fontWeight: 80, paddingTop:'150px'}}>Popular Videos</h1>
            <div className='poora-popu'>
                {
                    videos && videos.length > 0 && videos.map((items, i) => (
                        <Card
                            Title={items.snippet.title}
                            Description={items.snippet.description}
                            Audio={audios[i].Sound}
                            Image={items.snippet.thumbnails.high.url}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default PopularPage