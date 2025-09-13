

import React from 'react';

import './News.css'
import VideoSection from "./VideoSection.tsx";
import NewsGrid from "./NewsGrid.tsx";



const News: React.FC = () => {
    return (
        <main>
            <NewsGrid/>
            <VideoSection/>
        </main>
    );
};

export default News;
