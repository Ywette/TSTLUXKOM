import React from 'react'
import { SocialIcon } from 'react-social-icons';
import '../app/stylings/Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <h2 className="footer-heading">Connect with us</h2>                
                <div className="social-links">
                    {/* Facebook */}
                    <SocialIcon url="https://facebook.com" network="facebook" className="social-link" />

                    {/* X (formerly Twitter) */}
                    <SocialIcon url="https://x.com" network="x" className="social-link" />

                    {/* LinkedIn */}
                    <SocialIcon url="https://linkedin.com" network="linkedin" className="social-link" />

                    {/* Instagram */}
                    <SocialIcon url="https://instagram.com" network="instagram" className="social-link" />
                </div>                
            </footer>
        </div>
    )
}

export default Footer