import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
    <div className="vision__possibility section__padding" id="possibility">
        <div className="vision__possibility-image">
            <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="vision__possibility-content">
            <h4>Request Early Access to Get Started</h4>
            <h1 className="gradient__text">Transforming Businesses,  <br /> Shaping the Future</h1>
            <p>A world where businesses are transformed and shaped by the power of AI. With our innovative AI solutions and commitment to excellence, we aim to help businesses unlock their full potential and stay ahead in a rapidly evolving market. Join us on our journey to create a future where AI drives innovation, efficiency, and growth for all.</p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
);

export default Possibility;