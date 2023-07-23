import React, { useEffect, useState } from 'react'
// import videos from './eng'
import Card from '../Card'
import './popular.css'
import audios from './pops.js'

// https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLCma2ZNcoPEI2sxTTsGGfW75HAou6aOGR&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM
// AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM

const Popular = () => {

    let link = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLCma2ZNcoPEI2sxTTsGGfW75HAou6aOGR&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM'
    
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

    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    };

    return (
        <div>
            {
                videos && videos.length > 0 && videos.map((item,i) => (
                    <Card
                        Title={item.snippet.title}
                        Description={truncate(item.snippet.description,200)}
                        Audio={audios[i].Sound}
                        Image={item.snippet.thumbnails.standard.url}
                    />
                ))
            }
        </div>
    )
}

export default Popular