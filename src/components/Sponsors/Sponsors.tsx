import React from 'react';
import { Container } from 'react-bootstrap';
import './Sponsors.css';

export interface Sponsor {
    name: string;
    logoUrl: string;
}

export const sponsorsData: Sponsor[] = [
    { name: 'LVMH', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/lvmh.webp' },
    { name: 'Pirelli', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/pirelli.webp' },
    { name: 'Aramco', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/aramco.webp' },
    { name: 'Heineken', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/common/f1/logo/heineken/logoheinekenoutlinedlight.webp' },
    { name: 'AWS', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL.webp' },
    { name: 'Lenovo', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/lenovo.webp' },
    { name: 'DHL', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/dhl.webp' },
    { name: 'Qatar Airways', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/qatar.webp' },
    { name: 'MSC', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/msc.webp' },
    { name: 'Crypto.com', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/crypto.com.webp' },
    { name: 'Salesforce', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/salesforce.webp' },
    { name: 'Louis Vuitton', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/louis%20vuitton.webp' },
    { name: 'TAG Heuer', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/TAGH_Shield_Monochrome_White-pw1.webp' },
    { name: 'Moet Hennessy', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/moet%20hennessy.webp' },
    { name: 'American Express', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/Amex.webp' },
    { name: 'Santander', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/santander.webp' },
    { name: 'Allwyn', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/allwyn.webp' },
    { name: 'Globant', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/globant.webp' },
    { name: 'Las Vegas Convention and Visitors Authority', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/las%20vegas.webp' },
    { name: 'Paramount+', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/Paramount+.webp' },
    { name: 'Barilla', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/barilla.webp' },
    { name: 'Liqui Moly', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/liqui-moly.webp' },
    { name: 'Nestle', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/nestle.webp' },
    { name: 'PwC', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/pwc.webp' },
    { name: 'PepsiCo', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/pepsico.webp' },
    { name: 'Puma', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/puma.webp' },
    { name: 'TATA', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/TATA.webp' },
    { name: 'Aggreko', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/fom-website/2020/sponsors/aggreko.webp' },
    { name: 'BBS', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/BBS.webp' },
    { name: 'McDonalds', logoUrl: 'https://media.formula1.com/image/upload/e_trim/c_fit,w_160,h_90/q_auto/v1740000000/content/dam/fom-website/2020/sponsors/mcdonalds.webp' },
];




const Sponsors: React.FC = () => {
    return (
        <Container fluid="lg" className="mt-5 text-center">
            <h2 className="text-danger text-start pb-4" style={{ fontFamily: "F1 Bold" }}>OUR PARTNERS</h2>
            <div className="sponsors-grid d-flex flex-wrap justify-content-center align-items-center">
                {sponsorsData.map((sponsor) => (
                    <div key={sponsor.name} className="sponsor-item">
                        <img
                            src={sponsor.logoUrl}
                            alt={`${sponsor.name} Logo`}
                            className="sponsor-logo"
                        />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Sponsors;
