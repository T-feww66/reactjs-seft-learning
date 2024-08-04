import "./Footer.scss";
function Footer() {
    return (
        <div className="footer">
            <div className="footer__inner">
                <p className="footer__left">
                    © 2024 Edusity. All rights reserved.
                </p>

                <div className="footer__right">
                    <span>Terms of Services</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
