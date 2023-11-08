import React from 'react';
import './Hero.css';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        <header className="hero flex items-center">
                    <div className="container">
                        <div className="welcome flex items-center">
                            
                            {/* <img src="./icons/logo-2.svg" alt=""/> */}
                        </div>
                        <p>Welcome to</p>
                        <h1>The World Best <span>Restuarant</span> Website</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy.</p>
                        <div>

                            <Link to="/cards"><button className="btn btn-primary" herf="/Cards">Menu</button></Link>
                            <Link to="/about"><button className="btn btn-secondary">About Us</button></Link>

                        </div>
                        <div className="hero-image">
                            <img className='front-pic' src="./images/straw.png" alt=""/>
                        </div>
                    </div>
                </header>
    </div>
  )
}

export default Hero