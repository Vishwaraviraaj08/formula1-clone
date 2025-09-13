import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import './PointsTable.css';


import MaxVerstappen from '../../assets/img/players/max-ver.png';
import LandoNorris from '../../assets/img/players/lando-norris.png';
import CharlesLeclerc from '../../assets/img/players/charles-lecrec.png';

export interface DriverStanding {
    position: number;
    driverName: string;
    nationality: string;
    team: string;
    points: number;
    driverImage?: string;
    teamColor: string;
}

export const driverStandingsData: DriverStanding[] = [
    { position: 1, driverName: 'Max Verstappen', nationality: 'NED', team: 'Red Bull Racing', points: 345, driverImage: MaxVerstappen, teamColor: '#3671C6' },
    { position: 2, driverName: 'Lando Norris', nationality: 'GBR', team: 'McLaren', points: 301, driverImage: LandoNorris, teamColor: '#FF8000' },
    { position: 3, driverName: 'Charles Leclerc', nationality: 'MON', team: 'Ferrari', points: 288, driverImage: CharlesLeclerc, teamColor: '#E8002D' },
    { position: 4, driverName: 'Oscar Piastri', nationality: 'AUS', team: 'McLaren', points: 250, teamColor: '#FF8000' },
    { position: 5, driverName: 'George Russell', nationality: 'GBR', team: 'Mercedes', points: 210, teamColor: '#27F4D2' },
    { position: 6, driverName: 'Lewis Hamilton', nationality: 'GBR', team: 'Ferrari', points: 198, teamColor: '#E8002D' },
    { position: 7, driverName: 'Carlos Sainz', nationality: 'ESP', team: 'Williams', points: 175, teamColor: '#64C4FF' },
    { position: 8, driverName: 'Sergio Perez', nationality: 'MEX', team: 'Red Bull Racing', points: 155, teamColor: '#3671C6' },
    { position: 9, driverName: 'Fernando Alonso', nationality: 'ESP', team: 'Aston Martin', points: 88, teamColor: '#229971' },
    { position: 10, driverName: 'Pierre Gasly', nationality: 'FRA', team: 'Alpine', points: 46, teamColor: '#FF87BC' },
];



const getFlagEmoji = (countryCode: string) => {
    const flags: { [key: string]: string } = {
        NED: '🇳🇱', GBR: '🇬🇧', MON: '🇲🇨', AUS: '🇦🇺',
        ESP: '🇪🇸', MEX: '🇲🇽', FRA: '🇫🇷',
    };
    return flags[countryCode] || '🏳️';
};


const DriverStandings: React.FC = () => {
    const podiumDrivers = [...driverStandingsData].slice(0, 3);
    const otherDrivers = driverStandingsData.slice(3, 10);

    const p1 = podiumDrivers.find(d => d.position === 1);
    const p2 = podiumDrivers.find(d => d.position === 2);
    const p3 = podiumDrivers.find(d => d.position === 3);
    const podiumOrder = [p2, p1, p3];

    return (
        <Container fluid="lg" className=" pb-5">
            <h2 className="text-danger mb-4" style={{ fontFamily: "F1 Bold" }}>2025 DRIVER STANDINGS</h2>

            <Row className="podium-row mb-4">
                {podiumOrder.map(driver => driver && (
                    <Col xs={12} md={4} key={driver.position} className={`podium-col p${driver.position}`}>
                        <div
                            className="podium-card"
                            style={{ '--team-color': driver.teamColor } as React.CSSProperties}
                        ><div className="podium-stripes"></div>

                            <div className="podium-image" style={{ backgroundImage: `url(${driver.driverImage})` }}></div>
                            <div className="podium-overlay">
                                <div className="podium-position">{driver.position}</div>
                                <div className="podium-driver-info">
                                    <span className="driver-name">{driver.driverName.split(' ')[0]} <strong>{driver.driverName.split(' ')[1].toUpperCase()}</strong></span>
                                    <span className="driver-team">{getFlagEmoji(driver.nationality)} {driver.team}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            <Table hover variant="dark" className="standings-table">
                <tbody>
                {otherDrivers.map((driver) => (
                    <tr key={driver.position}>
                        <td className="position-cell">{driver.position}</td>
                        <td className="driver-cell">
                            <span className="team-color-bar" style={{ backgroundColor: driver.teamColor }}></span>
                            {driver.driverName} {getFlagEmoji(driver.nationality)}
                        </td>
                        <td>{driver.team}</td>
                        <td className="points-cell">{driver.points} PTS</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DriverStandings;