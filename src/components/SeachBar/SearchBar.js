import React, { useState, useEffect} from 'react'
import ImageCard from './ImageCard';
const apiKey = process.env.REACT_APP_NASA_KEY;



function SearchBar() {
    const[urls, setUrls] = useState(null);
    const[showDetail, setShowDetail] = useState(false);
    useEffect(() => {
        const nasaApiSearch = async ()=>{
            let response = await fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=5&api_key=${apiKey}`);
            let data = await response.json();
            setUrls(data.photos);
            console.log(data.photos);
        }
        nasaApiSearch();
    }, [])
    
    

    return (
        <div className='imagecontainer'>
            {urls ? urls.map(url=>(
                <ImageCard url = {url} showDetail={showDetail} setShowDetail={setShowDetail}/>
            )): null}
        </div>
    )
}

export default SearchBar
