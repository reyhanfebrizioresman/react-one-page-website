import React,{useState} from 'react'
import './Navbar.scss'
import logo from '../Image/logo1.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <div className={"nav " + (menuOpen && "active")}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="right">
                    {/* Ketika di klik menu nya pada saat di posisi false maka akan berubah menjadi true atau sebalik nya */}
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    <li><Link to="home" smooth={true} duration={2000}>Home</Link></li>
                    <li><Link to="features" smooth={true} duration={2000}>Features</Link></li>
                    <li><Link to="services" smooth={true} duration={2000}>Services</Link></li>
                    <li><Link to="subscribe" smooth={true} duration={2000}>Subscribe</Link></li>
                    <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
