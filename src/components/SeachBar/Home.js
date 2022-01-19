import React from 'react'
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom';


function Home() {
    // const[urls, setUrls] = useState();
    // const nasaApiSearch = async ()=>{
    //         let response = await fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=5&api_key=${apiKey}`);
            
    //         let data = await response.json();
    //         setUrls(data.photos);
    //         console.log(data.photos);
    //     }
    //     nasaApiSearch();
    
    return (
        <div className='App'>
            <div className='searchContainer'>
                <div className="logocontainer">
                    <img src={logo} alt='spacestagram logo'/>
                </div>
                <div className='searchbox'>
                    <h3 className='boldtext'>Search through NASA's space images</h3>
                    <Link to='/images' className= "link">Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
