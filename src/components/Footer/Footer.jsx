import './footer.scss';
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='footer'>
            <div className="footerContainer">
                <div className="column1">
                    <Link to='/'>
                        <img src="/assets/images/YGF Logo.jpg" alt="YGF" />
                    </Link>
                </div>
                <div className="column2">
                    <h3>Advanced</h3>
                    <Link to='#' className='footerLink'>Help Center</Link>
                    <Link to='#' className='footerLink'>Options</Link>
                    <Link to='#' className='footerLink'>Questions</Link>
                    <Link to='#' className='footerLink'>Documentation</Link>
                </div>
                <div className="column2">
                    <h3>Support</h3>
                    <Link to='#' className='footerLink'>Help Center</Link>
                    <Link to='#' className='footerLink'>Options</Link>
                    <Link to='#' className='footerLink'>Questions</Link>
                    <Link to='#' className='footerLink'>Documentation</Link>
                </div>
                <div className="column2">
                    <h3>Resources</h3>
                    <Link to='#' className='footerLink'>Help Center</Link>
                    <Link to='#' className='footerLink'>Options</Link>
                    <Link to='#' className='footerLink'>Questions</Link>
                    <Link to='#' className='footerLink'>Documentation</Link>
                </div>
                <div className="column2">
                    <h3>Support</h3>
                    <Link to='#' className='footerLink'>Help Center</Link>
                    <Link to='#' className='footerLink'>Options</Link>
                    <Link to='#' className='footerLink'>Questions</Link>
                    <Link to='#' className='footerLink'>Documentation</Link>
                </div>
            </div>

            <p className="copyright">&copy;Youthful Guide Foundation | 2021</p>
        </div>
    )
}

export default Footer;