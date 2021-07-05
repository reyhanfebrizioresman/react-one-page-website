import React from 'react'
import './Hero.scss'
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="content">
                <h1>It's a <span>ReactJS</span><br/>Website</h1>
                <p>Most Calenders are designed for teams This designed for
                freelancers who want a simple way to plan their schools
                </p>
                <div className="btn">
                    <a href="" className="btn-hire">Here Me</a>
                    <a href="" className="btn-download">Download App</a>
                </div>
            </div> 
        </div>
    )
}

export default Hero
