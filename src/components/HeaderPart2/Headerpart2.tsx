import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/f1_logo.svg';
import './HeaderPart2.css';
import './HamburgerMenu.css';
import {useNavigate} from "react-router-dom";



import AlfaRomeoLogo from '../../assets/img/Teams/Alfa-Romeo.png';
import FerrariLogo from '../../assets/img/Teams/Ferrari.png';
import HaasLogo from '../../assets/img/Teams/Haas.png';
import MclarenLogo from '../../assets/img/Teams/Mclaren.png';
import MercedesLogo from '../../assets/img/Teams/Mercedes.png';
import RedBullLogo from '../../assets/img/Teams/Red Bull.png';
import RenaultLogo from '../../assets/img/Teams/Renault.png';
import RacingPointLogo from '../../assets/img/Teams/Racing Point.png';


const menuItems = [
    { key: 'schedule', label: 'Schedule' },
    { key: 'results', label: 'Results' },
    { key: 'news', label: 'News' },
    { key: 'drivers', label: 'Drivers' },
    { key: 'Teams', label: 'Teams' },
    { key: 'fantasy', label: 'Fantasy & Gaming' },
    { key: 'members', label: "F1 Members' Area" },
];

const ResultsMenu: React.FC = () => {

    interface ResultItem {
        title: string;
        description?: string;
        link?: string;
    }

    const results: ResultItem[] = [
        { title: '2025 Season', description: 'Latest race results and standings', link: '/results/2025' },
        { title: 'F1 Awards', description: 'Best performances of the season', link: '/results/awards' },
        { title: 'Team Standings', description: 'Points and rankings of all Teams', link: '/results/Teams' },
        { title: 'Archive 2000-2024', description: 'Historic results and standings', link: '/results/archive' },
        { title: 'Driver Stats', description: 'All-time driver statistics', link: '/results/drivers' },
        { title: 'Constructor Stats', description: 'All-time constructor statistics', link: '/results/constructors' },
    ];


    return (
        <div className="results-menu">
            {results.map((item, index) => (
                <a key={index} href={item.link} className="result-card  rounded rounded-pill" style={{cursor: "pointer"}}>
                    <h6>{item.title}</h6>
                </a>
            ))}
        </div>
    );
}

const ScheduleMenu: React.FC = () => {
    interface Race {
        round: number;
        city: string;
        date: string;
        image: string; // image URL
    }

    const races: Race[] = [
        { round: 12, city: 'Monaco', date: '23-25 May', image: 'https://tse1.mm.bing.net/th/id/OIP.3cmQOpgTSyglspouE1AjfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { round: 13, city: 'Canada', date: '07-09 Jun', image: 'https://tse1.mm.bing.net/th/id/OIP.3cmQOpgTSyglspouE1AjfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { round: 14, city: 'France', date: '21-23 Jun', image: 'https://tse1.mm.bing.net/th/id/OIP.3cmQOpgTSyglspouE1AjfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
        { round: 15, city: 'Austria', date: '05-07 Jul', image: 'https://tse1.mm.bing.net/th/id/OIP.3cmQOpgTSyglspouE1AjfwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' },
    ];

    return (
        <div className="schedule-menu">
            {races.map((race, index) => (
                <div key={index} className="race-card">
                    <img src={race.image} alt={`${race.city} Race`} />
                    <div className="race-overlay">
                        <h5>ROUND {race.round}</h5>
                        <p>{race.city}</p>
                        <span>{race.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

const DriversMenu: React.FC = () => {

    const navigate = useNavigate()

    interface Driver {
        name: string;
        surname: string;
        team: string;
        path: string;
    }

    const drivers: Driver[] = [
        { name: 'Alexander', surname: 'Albon', team: 'red-bull', path: '/drivers/albon' },
        { name: 'Lewis', surname: 'Hamilton', team: 'mercedes', path: '/drivers/hamilton' },
        { name: 'Lando', surname: 'Norris', team: 'mclaren', path: '/drivers/norris' },
        { name: 'George', surname: 'Russell', team: 'williams', path: '/drivers/russell' },
        { name: 'Valtteri', surname: 'Bottas', team: 'mercedes', path: '/drivers/bottas' },
        { name: 'Daniil', surname: 'Kvyat', team: 'alpha-tauri', path: '/drivers/kvyat' },
        { name: 'Esteban', surname: 'Ocon', team: 'renault', path: '/drivers/ocon' },
        { name: 'Carlos', surname: 'Sainz', team: 'mclaren', path: '/drivers/sainz' },
        { name: 'Pierre', surname: 'Gasly', team: 'alpha-tauri', path: '/drivers/gasly' },
        { name: 'Nicholas', surname: 'Latifi', team: 'williams', path: '/drivers/latifi' },
        { name: 'Sergio', surname: 'Perez', team: 'racing-point', path: '/drivers/perez' },
        { name: 'Lance', surname: 'Stroll', team: 'racing-point', path: '/drivers/stroll' },
        { name: 'Antonio', surname: 'Giovinazzi', team: 'alfa-romeo', path: '/drivers/giovinazzi' },
        { name: 'Charles', surname: 'Leclerc', team: 'ferrari', path: '/drivers/leclerc' },
        { name: 'Kimi', surname: 'Raikkonen', team: 'alfa-romeo', path: '/drivers/raikkonen' },
        { name: 'Max', surname: 'Verstappen', team: 'red-bull', path: '/drivers/verstappen' },
        { name: 'Romain', surname: 'Grosjean', team: 'haas', path: '/drivers/grosjean' },
        { name: 'Kevin', surname: 'Magnussen', team: 'haas', path: '/drivers/magnussen' },
        { name: 'Daniel', surname: 'Ricciardo', team: 'renault', path: '/drivers/ricciardo' },
        { name: 'Sebastian', surname: 'Vettel', team: 'ferrari', path: '/drivers/vettel' },
    ];

    return (
        <div className="drivers-menu">
            <div className="all-drivers-container">
                {drivers.map((driver, idx) => (
                    <div key={idx} className="buttonn" onClick={() => navigate(driver.path)} style={{cursor: "pointer"}}>
                            <p className="slice-name">{driver.name} <span className="surname">{driver.surname}</span>
                            </p>
                            <div className="chevron">
                                <i className="fas fa-angle-right"></i>
                            </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

const TeamsMenu: React.FC = () => {
    interface Team {
        name: string;
        path: string;
        logo: string;
        hoverClass: string;
        borderClass: string;
    }

    const teams: Team[] = [
        { name: "Alfa Romeo", path: "/Teams/alfa-romeo", logo: AlfaRomeoLogo, hoverClass: "alfa-romeo-hover", borderClass: "border-alfa-romeo-left" },
        { name: "Haas", path: "/Teams/haas", logo: HaasLogo, hoverClass: "haas-hover", borderClass: "border-haas-left" },
        { name: "Racing-Point", path: "/Teams/racing-point", logo: RacingPointLogo, hoverClass: "racing-point-hover", borderClass: "border-racing-point-left" },
        { name: "McLaren", path: "/Teams/mclaren", logo: MclarenLogo, hoverClass: "mclaren-hover", borderClass: "border-mclaren-left" },
        { name: "Red Bull", path: "/Teams/red-bull", logo: RedBullLogo, hoverClass: "red-bull-hover", borderClass: "border-red-bull-left" },
        { name: "Ferrari", path: "/Teams/ferrari", logo: FerrariLogo, hoverClass: "ferrari-hover", borderClass: "border-ferrari-left" },
        { name: "Mercedes", path: "/Teams/mercedes", logo: MercedesLogo, hoverClass: "mercedes-hover", borderClass: "border-mercedes-left" },
        { name: "Renault", path: "/Teams/renault", logo: RenaultLogo, hoverClass: "renault-hover", borderClass: "border-renault-left" },
    ];

    return (
        <div className="teams-menu">
            <div className="all-teams-container">
                {teams.reduce((rows: Team[][], team, idx) => {
                    if (idx % 4 === 0) rows.push([]);
                    rows[rows.length - 1].push(team);
                    return rows;
                }, []).map((row, rowIndex) => (
                    <div key={rowIndex} className="driver-row d-flex justify-content-center align-items-center gap-3 ">
                        {row.map((team, idx) => (
                            <div key={idx} className={`driver team-card `} >
                                <a className={`${team.hoverClass}`}>
                                    <div className="team-name">
                                        <p>{team.name}</p>
                                        <div className="chevron">
                                            <i className="fas fa-angle-right"></i>
                                        </div>
                                    </div>
                                    <div className="team-logo rounded-4 p-2">
                                        <div className={`border-team ${team.borderClass}`}></div>
                                        <img src={team.logo} alt={team.name} />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

}

const NewsMenu: React.FC = () => {
    const tags = ['News', 'Two Words', 'Ranking List', 'Upcoming Events', 'Highlights', 'F1 TV'];

    return (
        <div className="container-fluid my-4">
            <div className="d-flex flex-wrap align-items-center gap-3">
                {tags.map((tag) => (
                    <span key={tag} className="result-card fw-semibold  rounded rounded-pill" style={{cursor: "pointer"}}>
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
}

const FantasyAndGaming: React.FC = () => {
    const tags = ['Esports', 'Fantasy', 'F1 2025', 'F1 Manager 2024', 'F1 Predict', 'F1 Clash', 'F1 Mobile Racing'];

    return (
        <div className="container-fluid my-4">
            <div className="d-flex flex-wrap align-items-center gap-3">
                {tags.map((tag) => (
                    <span key={tag} className="result-card fw-semibold rounded rounded-pill" style={{cursor: "pointer"}}>
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
}

const HeaderPart2: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnterLink = (key: string) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setHovered(key);
    };

    const handleMouseLeaveLink = () => {
        hoverTimeout.current = setTimeout(() => setHovered(null), 150);
    };

    const handleMouseEnterDiv = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };

    const handleMouseLeaveDiv = () => {
        hoverTimeout.current = setTimeout(() => setHovered(null), 150);
    };

    const renderHoverComponent = () => {
        switch (hovered) {
            case 'results':
                return <ResultsMenu/>;
            case 'schedule':
                return <ScheduleMenu/>;
            case 'drivers':
                return <DriversMenu/>;
            case 'Teams':
                return <TeamsMenu/>;
            case 'news':
                return <NewsMenu/>;
            case 'fantasy':
                return <FantasyAndGaming/>;
            default:
                return null;
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <Navbar expand="lg" className="sub-navbar" style={{ backgroundColor: "rgb(21, 21, 30)", height: "100px" }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="F1 Logo" src={logo} width="150" className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <Navbar.Collapse id="sub-navbar-nav" className={menuOpen ? 'show' : ''}>
                        <Nav className="m-auto gap-3 main-f1-nav">
                            {menuItems.map(item => (
                                <Nav.Link
                                    key={item.key}
                                    href={`#`}
                                    onMouseEnter={() => handleMouseEnterLink(item.key)}
                                    onMouseLeave={handleMouseLeaveLink}
                                >
                                    {item.label}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hover div */}
            {hovered && (
                <div
                    className="hover-content"
                    onMouseEnter={handleMouseEnterDiv}
                    onMouseLeave={handleMouseLeaveDiv}
                >
                    {renderHoverComponent()}
                </div>
            )}
        </div>
    );
};

export default HeaderPart2;
