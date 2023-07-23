import React, { useEffect, useState } from 'react'
import audios from './ari.js'
import Card from '../Card'
import './arijit.css'

// https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLCma2ZNcoPELrQ2jsluSpLoW0uX5iyqMG&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM
// AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM

const Arijit = () => {

    let link = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLCma2ZNcoPELrQ2jsluSpLoW0uX5iyqMG&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM'
    
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

export default Arijit