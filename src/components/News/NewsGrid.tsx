import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from './NewsCard';
import './News.css';


import News1 from '../../assets/img/news/1.jpg';
import News2 from '../../assets/img/news/2.jpg';
import News3 from '../../assets/img/news/3.jpg';
import News4 from '../../assets/img/news/4.jpg';
import News5 from '../../assets/img/news/5.jpg';
import News6 from '../../assets/img/news/6.jpg';



export type NewsArticle =  {
    id: number;
    priority: number;
    category: string;
    title: string;
    imageUrl: string;
}

const newsData: NewsArticle[] = [
    { id: 1, priority: 1, category: 'NEWS', title: 'Verstappen snatches pole position in a thrilling wet qualifying session', imageUrl: News4 },
    { id: 2, priority: 2, category: 'FEATURE', title: 'Inside the Haas strategy that almost delivered a podium', imageUrl: News2 },
    { id: 3, priority: 2, category: 'REACTION', title: 'Leclerc "frustrated but optimistic" after P2 finish', imageUrl: News3 },
    { id: 4, priority: 3, category: 'TECHNICAL', title: 'Why Mercedes\' new floor design is a step forward', imageUrl: News6 },
    { id: 5, priority: 3, category: 'ANALYSIS', title: 'Five key moments from a dramatic Silverstone race', imageUrl: News5 },
    { id: 6, priority: 3, category: 'NEWS', title: 'Alonso extends contract with Aston Martin through 2026', imageUrl: News1 },
];


const NewsGrid: React.FC = () => {
    const mainArticle = newsData.find(article => article.priority === 1);
    const secondaryArticles = newsData.filter(article => article.priority === 2);
    const otherArticles = newsData.filter(article => article.priority > 2);

    return (
        <Container fluid="lg" className="my-4">
            <Row className="g-3">
                <Col lg={6}>
                    {mainArticle && <NewsCard article={mainArticle} />}
                </Col>

                <Col lg={6}>
                    <Row className="g-3">
                        {secondaryArticles.map(article => (
                            <Col md={12} key={article.id}>
                                <NewsCard article={article} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            <Row className="g-3 mt-1">
                {otherArticles.map(article => (
                    <Col lg={4} md={6} key={article.id}>
                        <NewsCard article={article} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewsGrid;