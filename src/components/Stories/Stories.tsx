
import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Stories.css';


import Story1 from '../../assets/img/stories/1.jpg';
import Story2 from '../../assets/img/stories/2.jpg';
import Story3 from '../../assets/img/stories/3.jpg';
import Story4 from '../../assets/img/stories/4.jpg';
import Story5 from '../../assets/img/stories/5.jpg';
import Story6 from '../../assets/img/stories/6.jpg';
import Story7 from '../../assets/img/stories/7.jpg';
import Story8 from '../../assets/img/stories/8.jpg';


export interface Story {
    id: number;
    title: string;
    imageUrl: string;
}

const pictures = [Story1, Story7, Story3, Story4, Story5, Story6, Story2, Story8]

export const storiesData: Story[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Behind the scenes at the legendary ${i % 2 === 0 ? 'Monaco' : 'Silverstone'} circuit`,
    imageUrl: pictures[i % pictures.length],
}));


const VISIBLE_CARDS = 5;

const Stories: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2500);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNext = () => {
        if (currentIndex >= storiesData.length - VISIBLE_CARDS) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const cardWidthPercent = 100 / VISIBLE_CARDS;
    const offset = -currentIndex * cardWidthPercent;

    return (
        <Container fluid="lg" className="my-5">
            <h2 className="text-danger  mb-3" style={{fontFamily: 'F1 Bold'}}>STORIES</h2>
            <div className="stories-container">
                <Button
                    variant={"link"}
                    className="stories-control prev"
                    style={{backgroundColor: 'rgba(0,0,0,0)'}}
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    <FaChevronLeft />
                </Button>

                <div className="stories-viewport">
                    <div
                        ref={trackRef}
                        className="stories-track"
                        style={{ transform: `translateX(${offset}%)` }}
                    >
                        {storiesData.map((story) => (
                            <div className="story-card-wrapper" key={story.id}>
                                <Card className="story-card bg-dark text-white h-100 rounded-4">
                                    <Card.Img
                                        src={story.imageUrl}
                                        alt={story.title}
                                        className="story-card-image"
                                    />
                                    <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
                                        <Card.Title className="story-card-title">
                                            {story.title}
                                        </Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <Button variant="link" className="stories-control next" onClick={handleNext} style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                    <FaChevronRight />
                </Button>
            </div>
        </Container>
    );
};

export default Stories;