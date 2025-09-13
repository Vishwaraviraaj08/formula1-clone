

import React from 'react';
import { Card } from 'react-bootstrap';
import type {NewsArticle} from './NewsGrid';

import './News.css'


export type NewsCardProps =  {
    article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
    return (
        <Card className="news-card bg-dark text-white h-100">
            <Card.Img src={article.imageUrl} alt={article.title} className="news-card-img" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
                <div>
                    <span className="news-card-category">{article.category}</span>
                    <Card.Title className="news-card-title mt-1">{article.title}</Card.Title>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default NewsCard;
