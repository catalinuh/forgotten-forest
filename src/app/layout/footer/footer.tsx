import InstagramIcon from '@mui/icons-material/Instagram';

import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__above">
        <div className="footer__title">
          <h2>Forgotten Forest</h2>
        </div>

        <div>
          <p>Our Mission</p>
        </div>
        <div>
          <p>Get Involved</p>
        </div>
        <div>
          <InstagramIcon />
        </div>
      </div>
      <hr className="footer_divider" />
      <div className="footer__below">
        <div className="footer__below--link">
          <p>Our Mission</p>
        </div>
        <div className="footer__below--link">
          <p>Get Involved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
