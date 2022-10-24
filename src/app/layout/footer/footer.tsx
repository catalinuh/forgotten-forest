import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'

import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__above">
                <div className="footer__title">
                    <h2>Forgotten Forest</h2>
                </div>

                <Link to="/">
                    <p>Home</p>
                </Link>
                <Link to="/mission">
                    <p>Our Mission</p>
                </Link>
                <Link to="/get-involved">
                    <p>Get Involved</p>
                </Link>
                <div>
                    <a href="https://www.instagram.com/forgottenforestpr">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <hr className="footer_divider" />
            <div className="footer__below">
                <Link to="/" className="footer__below--link">
                    <p>Home</p>
                </Link>
                <Link to="/mission" className="footer__below--link">
                    <p>Our Mission</p>
                </Link>
                <Link to="/get-involved" className="footer__below--link">
                    <p>Get Involved</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer
