import React from 'react';
import { FooterContainer } from './styledComponents';

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} Huynh Tu Anh Chau. All rights reserved.        
        </FooterContainer>
    );
};