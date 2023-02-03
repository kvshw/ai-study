import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';


const Header = () => {
    return (
        <div className="vision__header section__padding" id="home">
            <div className="vision__header-content">
                <h1 className="gradient__text">Revolutionizing Future of Industries with VisionForge AI</h1>
                <p>VisionForge AI is a cutting-edge artificial intelligence company dedicated to empowering businesses with innovative technology solutions. Our team of experts leverages the latest advancements in AI, including machine learning and deep neural networks, to help organizations solve complex problems, make informed decisions, and drive growth. Join the AI revolution with VisionForge AI and experience the power of artificial intelligence.</p>

                <div className="vision__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>

                <div className="vision__header-content__people">
                    <img src={people} alt='' />
                    <p>2720 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className="vision__header-image">
                <img src={ai} alt='' />
            </div>
        </div>
    )
}

export default Header