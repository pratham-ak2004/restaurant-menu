import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div>
        <header class="hero flex items-center">
                    <div class="container">
                        <div class="welcome flex items-center">
                            
                            {/* <img src="./icons/logo-2.svg" alt=""/> */}
                        </div>
                        <p>Welcome to</p>
                        <h1>The World Best <span>Restuarant</span> Website</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the
                            industry's standard dummy.</p>
                        <div>
                            <button class="btn btn-primary" herf="/Cards">Menu</button>
                            <button class="btn btn-secondary">About Us</button>
                        </div>
                        <div class="hero-image">
                            <img className='front-pic' src="./images/straw.png" alt=""/>
                        </div>
                    </div>
                </header>
    </div>
  )
}

export default Hero