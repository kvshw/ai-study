import React from 'react';
import Feature from '../../components/feature/Feature';
import './visionForge.css';

const VisionForge = () => (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
            <Feature title="What is VisionForge" text="VisionForge AI is a leading artificial intelligence company that provides businesses with innovative technology solutions to improve their operations, enhance customer experiences, and drive growth. With a focus on cutting-edge AI technologies, such as machine learning and deep neural networks, VisionForge AI helps organizations tackle complex challenges and make informed decisions." />
        </div>
        <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">Driving Innovation and Efficiency through AI</h1>
            <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
            <Feature title="Predictive Maintenance" text="A manufacturing company can use predictive maintenance AI to optimize maintenance schedules and minimize downtime." />
            <Feature title="Financial Fraud Detection" text="A financial services company can use fraud detection AI to identify and prevent fraudulent activities in real-time." />
            <Feature title="Supply Chain Optimization" text="A logistics company can use supply chain optimization AI to improve transportation routes, reduce delivery times, and minimize waste." />
        </div>
    </div>
);

export default VisionForge;