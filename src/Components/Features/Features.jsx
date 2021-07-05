import React from 'react'
import './Features.scss';
import featureImg from '../Image/Frame 19.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Features = () => {
    return (
        <div className="feature-container" id="features">
            <h1 className="title">Features</h1>
            <p className="desc-title">Here are some features of the Software</p>
            <div className="content">
                <div className="image" 
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                >
                    <img src={featureImg} alt="" />
                </div>
                <div className="features-text"
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                >
                    <h1>Features</h1>
                    <h2>This Aplication Software is Art</h2>
                    <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis, 
                    culpa non aut nam esse rem iste velit porro repellat quod sit quasi veniam 
                    dignissimos, maiores odit eum doloremque est minima sint deserunt eligendi 
                    architecto nostrum neque minus animi odit cum sed deserunt.</p>
                    <a href="" className="btn">View More Features</a>
                </div>
            </div>
        </div>
    )
}

export default Features
