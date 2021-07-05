import React from 'react'
import './ServicesCard.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const ServicesCard = ({img,title}) => {
    return (
        <div className="card" 
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
            <img src={img} alt="" />
            <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ipsam vel quos quia placeat facere, ducimus, voluptas iure, 
                temporibus obcaecati blanditiis repellat provident beatae 
            </p>
            <a href="" className="btn">{title}</a>
        </div>
    )
}

export default ServicesCard
