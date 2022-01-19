import React,{useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageCard = ({url,showDetail,setShowDetail}) => {
     const[like, setLike] = useState(false);
     const likeImage =()=>{
        setLike(!like)
     }
  return (
      <div key={url.id} >
            <LazyLoadImage src={url.img_src} alt='{url.rover.name}' width='250px' height='250px' className='images'/>
            <div className='images'>
                <p className='detailstext2'>{url.rover.name} captured with {url.camera.full_name} on {url.earth_date}</p>
                <i className={`fas fa-thumbs-up ` } onClick={likeImage} style={like? {color:'blue'}:{}}></i>
            </div>
        </div>
  )

};

export default ImageCard;
