import React from 'react';
import { Nav, NavLink, SocialIcons } from './styledComponents';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar: React.FC = () => {
    return (
        <Nav>
            <NavLink href="/">Home</NavLink>
        <SocialIcons>
            <a href="https://github.com/tuanh00" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} color="#FFF"/>
            </a>
            <a href="https://www.linkedin.com/in/huynh-tu-anh-chau/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color="#0E76A8"/>
            </a>
        </SocialIcons>
    </Nav>
    );
};