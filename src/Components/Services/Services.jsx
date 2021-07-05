import React from 'react'
import ServicesCard from './ServicesCard'
import img1 from '../Image/s1.png'
import img2 from '../Image/s2.png'
import './Services.scss'
const Services = () => {
    return (
        <div className="service-container" id="services">
            <h1>Services</h1>
            <p>Here are some Services i provide</p>
            <div className="card-wrapper">
                <ServicesCard img={img1} title="Python"/>
                <ServicesCard img={img2} title="ReactJs"/>
            </div>
        </div>
    )
}

export default Services
