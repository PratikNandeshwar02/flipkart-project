// import { div } from 'react-router-dom';
import "./footer.css";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__item">
                <div className="footer__itemHeading">About</div>
                <div to="/" className="footer__itemTitle">About Us</div>
                <div to="/" className="footer__itemTitle">Contact Us</div>
                <div to="/" className="footer__itemTitle">Careers</div>
                <div to="/" className="footer__itemTitle">Flipkart Stories</div>
                <div to="/" className="footer__itemTitle">Press</div>
                <div to="/" className="footer__itemTitle">Flipkart Wholesale</div>
                <div to="/" className="footer__itemTitle">Corporate Information</div>
            </div>
            <div className="footer__item">
                <div className="footer__itemHeading">Help</div>
                <div to="/" className="footer__itemTitle">Payments</div>
                <div to="/" className="footer__itemTitle">Shipping</div>
                <div to="/" className="footer__itemTitle">Cancellation & Returns</div>
                <div to="/" className="footer__itemTitle">FAQ</div>
                <div to="/" className="footer__itemTitle">Report Infringement</div>
            </div>
            <div className="footer__item">
                <div className="footer__itemHeading">CONSUMER POLICY</div>
                <div to="/" className="footer__itemTitle">CONSUMER POLICY</div>
                <div to="/" className="footer__itemTitle">Term of Use</div>
                <div to="/" className="footer__itemTitle">Security</div>
                <div to="/" className="footer__itemTitle">Privacy</div>
                <div to="/" className="footer__itemTitle">Sitemap</div>
                <div to="/" className="footer__itemTitle">Grievance Redressal</div>
                <div to="/" className="footer__itemTitle">EPR Compliance</div>
            </div>
            <div className="footer__item">
                <div className="footer__itemHeading">SOCIAL</div>
                <div to="/" className="footer__itemTitle">Facebook</div>
                <div to="/" className="footer__itemTitle">Twitter</div>
                <div to="/" className="footer__itemTitle">YouTube</div>
            </div>

            <div className="footer__itemLeftBorder">
                <div className="footer__item">
                    <div className="footer__box">
                        <div className="footer__boxContent">
                            <div className="footer__itemHeading"> <span>Mail Us: </span> </div>
                            <div to="/" className="footer__itemTitle">
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__itemLeftBorder">
                <div className="footer__item">
                    <div className="footer__boxEnd">
                        <div className="footer__boxContent">
                            <div className="footer__itemHeading"> <span>Mail Us: </span> </div>
                            <div to="/" className="footer__itemTitle">
                                <p>Flipkart Internet Private Limited, </p>
                                <p> Buildings Alyssa, Begonia & </p>
                                <p> Clove Embassy Tech Village, </p>
                                <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                <p> Bengaluru, 560103, </p>
                                <p> Karnataka, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
} 

export default Footer;