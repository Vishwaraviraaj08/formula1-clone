import React, {useState} from 'react';
import { Container, Card, Modal } from 'react-bootstrap';
import { FaPlayCircle } from 'react-icons/fa';
import './News.css';


import Video1 from '../../assets/img/news/video-1.jpg';
import Video2 from '../../assets/img/news/video-2.jpg';
import Video3 from '../../assets/img/news/video-3.jpg';
import Video4 from '../../assets/img/news/video-4.jpg';
import Video5 from '../../assets/img/news/video-5.jpg';


export interface Video {
    id: number;
    title: string;
    thumbnailUrl: string;
    youtubeId: string;
}

export const videoData: Video[] = [
    { id: 1, title: 'Race Highlights: 2024 British Grand Prix', thumbnailUrl: Video1, youtubeId: 'https://www.youtube.com/embed/FRDNEP8unTo?si=EaYh-9sf2jsvx-c6' },
    { id: 2, title: 'Onboard: Lando Norris\'s Stunning Pole Lap', thumbnailUrl: Video2, youtubeId: 'https://www.youtube.com/embed/8yh9BPUBbbQ?si=d0eRbRZloXA36mPk' },
    { id: 3, title: 'Jolyon Palmer\'s Analysis: How Verstappen Won', thumbnailUrl: Video3, youtubeId: 'https://www.youtube.com/embed/vlUUrrwcUQw?si=G9UqR-MGPdWwjz1N' },
    { id: 4, title: 'Top 10 Moments from the Canadian Grand Prix', thumbnailUrl: Video4, youtubeId: 'https://www.youtube.com/embed/VJgdOMXhEj0?si=n8FUDZ2UYx78-7kF' },
    { id: 5, title: 'Weekend Warm-Up with the drivers at Silverstone', thumbnailUrl: Video5, youtubeId: 'https://www.youtube.com/embed/LNglLc2YKRo?si=Qh-CUuuVstRbcT7z' },
];


const VideoSection: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    const handleShow = (video: Video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedVideo(null);
    };

    return (
        <>
            <Container fluid="lg" className="my-5">
                <h2 className="text-danger mb-3" style={{ fontFamily: "F1 Bold" }}>LATEST VIDEOS</h2>
                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* Render the list of videos twice for a seamless loop */}
                        {[...videoData, ...videoData].map((video, index) => (
                            <div className="video-card-wrapper" key={`${video.id}-${index}`}>
                                <Card
                                    className="video-card bg-dark text-white"
                                    onClick={() => handleShow(video)}
                                >
                                    <div className="video-thumbnail-wrapper">
                                        <Card.Img variant="top" src={video.thumbnailUrl} />
                                        <FaPlayCircle className="play-icon" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="video-card-title">{video.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Video Player Modal */}
            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                <Modal.Body className="bg-dark p-0">
                    {selectedVideo && (
                        <div className="video-embed-container">
                            <iframe
                                src={selectedVideo.youtubeId}
                                title={selectedVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default VideoSection;