import React, { useState, useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const apiKey = process.env.REACT_APP_NASA_KEY;



function SearchBar() {
    const[urls, setUrls] = useState(null);
    const[like, setLike] = useState(false)
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
                    <div key={url.id} >
                        <LazyLoadImage src={url.img_src} alt='{url.rover.name}' width='250px' height='250px' className='images'/>
                        <div className='images'>
                            <div className='details'>
                                <p className='detailstext'>click arrow for image detail
                                </p>
                                {showDetail? <i class="fas fa-chevron-up" onClick={()=>setShowDetail(false)}></i>: <i className="fas fa-chevron-down" onClick={()=>setShowDetail(true)}></i>}
                            </div>
                            <p className='detailstext2'>{url.rover.name} captured with {url.camera.full_name} on {url.earth_date}</p>
                            <i className="fas fa-thumbs-up"></i>
                        </div>
                    </div>
            )): null}
        </div>
    )
}

export default SearchBar
