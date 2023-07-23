import React, { useEffect, useState } from 'react'
import audios from './eng' 
import Card from '../Card'
import './english.css'

// https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLCma2ZNcoPELLeLMc_SrmxhZdQBkAU96N&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM
// AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM

const English = () => {

    let link = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=PLCma2ZNcoPELLeLMc_SrmxhZdQBkAU96N&key=AIzaSyDW5EeYmh8pLpv7ZiX7wzXq2nhP9WmePmM'

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
            videos && videos.length > 0 && videos.map((items,i) => (

                    <Card 
                        Title={items.snippet.title}
                        Description={truncate(items.snippet.description,200)}
                        Audio={audios[i].Sound}
                        Image={items.snippet.thumbnails.standard.url}
                    />
            ))
        }
    </div>
    )
}

export default English