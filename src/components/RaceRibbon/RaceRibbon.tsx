import React from 'react';
import { Container } from 'react-bootstrap';
import './RaceRibbon.css';

const RaceRibbon: React.FC = () => {
    // Data for the next race (Azerbaijan GP)
    const nextRace = {
        round: 17,
        dates: '19-21 SEP',
        country: 'Azerbaijan',
        flag: '🇦🇿',
        trackTime: '15:00',
        localTime: '16:30',
    };

    return (
        <div className="race-ribbon bg-black" >
            <Container fluid="lg" className="d-flex justify-content-between align-items-center h-100">
                {/* Left Side: Race Info */}
                <div className="ribbon-left">
                    <div className="race-details gap-2">
                        <span className="race-round">R{nextRace.round}</span>
                        <span className="race-dates">{nextRace.dates}</span>
                    </div>
                    <div className="ribbon-separator"></div>
                    <a href="#" className="race-location">
                        <span className="race-flag">{nextRace.flag}</span>
                        <span className="race-country">{nextRace.country}</span>
                        <span className="race-chevron"> {">"} </span>
                    </a>
                </div>

                {/* Right Side: Timings & Sponsors */}
                <div className="ribbon-right">
                    <img src="https://clipground.com/images/tag-logo-3.png" alt="Tag Heuer" className="ribbon-sponsor-logo tag-heuer" />
                    <div className="race-times">
                        <div className="time-entry">
                            <span className="dot">•</span> MY TIME <span className="time-value">{nextRace.localTime}</span>
                        </div>
                        <div className="time-entry">
                            TRACK TIME <span className="time-value">{nextRace.trackTime}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RaceRibbon;