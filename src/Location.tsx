import React from 'react';
import styled from 'styled-components';
import locationImage from './img/Locationn.png';

export default function Location() {
    return (
        <Section>
            <MapImg src={locationImage} alt="Location map" />
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    justify-content: center;
`;

const MapImg = styled.img`
    padding: 2rem 0;

    @media (max-width: 640px) {
        width: 100%; 
        height: auto;
        padding: 0;
    }
`;
