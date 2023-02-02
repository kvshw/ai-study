import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
        title: 'Customized AI Solutions',
        text: 'VisionForge AI provides businesses with customized AI solutions that meet their specific needs and requirements.',
    },
    {
        title: 'Cutting-Edge AI Technologies',
        text: 'VisionForge AI leverages the latest advancements in AI, including machine learning and deep neural networks, to provide businesses with innovative technology solutions',
    },
    {
        title: 'Improved Operational Processes',
        text: 'VisionForge AI helps businesses streamline their operational processes, reduce manual workload, and increase efficiency.',
    },
    {
        title: 'Passion for AI and Commitment to Excellence',
        text: 'VisionForge AI is passionate about AI and committed to excellence, striving to be a trusted partner for businesses of all sizes.',
    },
];

const Features = () => (
    <div className="vision__features section__padding" id="features">
        <div className="vision__features-heading">
            <h1 className="gradient__text">Empowering Businesses to Unlock Their Full Potential by Realizing a Future of Endless Possibilities</h1>
            <p>Request Early Access to Get Started</p>
        </div>
        <div className="vision__features-container">
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
    </div>
);

export default Features;