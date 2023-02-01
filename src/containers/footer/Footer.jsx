import React from 'react';
import visionLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
    <div className="vision__footer section__padding">
        <div className="vision__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        </div>

        <div className="vision__footer-btn">
            <p>Request Early Access</p>
        </div>

        <div className="vision__footer-links">
            <div className="vision__footer-links_logo">
                <img src={visionLogo} alt="vision_logo" />
                <p>VisionForge AI, <br /> All Rights Reserved</p>
            </div>
            <div className="vision__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="vision__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="vision__footer-links_div">
                <h4>Get in touch</h4>
                <p>Oulu, Finland</p>
                <p>041-5793433</p>
                <p>info@visionforge.ai</p>
            </div>
        </div>

        <div className="vision__footer-copyright">
            <p>@2021 VisionForge. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;