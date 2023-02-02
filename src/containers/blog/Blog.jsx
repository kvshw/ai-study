import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
    <div className="vision__blog section__padding" id="blog">
        <div className="vision__blog-heading">
            <h1 className="gradient__text">Exploring the Frontiers of AI <br /> We are blogging about AI.</h1>
        </div>
        <div className="vision__blog-container">
            <div className="vision__blog-container_groupA">
                <Article imgUrl={blog01} date="Sep 26, 2021" text="Unlocking the Potential of Predictive Maintenance with AI" />
            </div>
            <div className="vision__blog-container_groupB">
                <Article imgUrl={blog02} date="Sep 26, 2021" text="Revolutionizing Customer Experiences with Chatbot AI" />
                <Article imgUrl={blog03} date="Sep 26, 2021" text="The Benefits and Challenges of Implementing AI in Supply Chain Management" />
                <Article imgUrl={blog04} date="Sep 26, 2021" text="How AI is Transforming the Financial Services Industry" />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="The Future of Image Recognition: Opportunities and Advancements" />
            </div>
        </div>
    </div>
);

export default Blog;