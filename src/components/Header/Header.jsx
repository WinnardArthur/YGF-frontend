import './header.scss';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div className="header">
        <Link to="/" className="imgContainer">
            <img src="/assets/images/YGF Logo.jpg" alt="YGF" />
        </Link>
        <ul className="headerLinks">
            <Link to="about-us" className='headerLink'>About Us</Link>
            <Link to="contact-us" className='headerLink'>Contact US</Link>
            <Link to="#" className='headerLink'>Our Services</Link>
            <Link to="#" className='headerLink'>Blog</Link>
            <Link to="#" className='headerLink donate'>Donate</Link>
        </ul>
    </div>
    )
}

export default Header