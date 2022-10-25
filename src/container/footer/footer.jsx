import React from 'react';
import { Bull, FooterContainer, Hng, IngressLogo, Zuri } from './footer.styled';
import svg from '../../assets/zuri.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Zuri>
        Zuri <Bull>&bull;</Bull> Internship
      </Zuri>
      <Hng>HNG Internship 9 Frontend Task</Hng>
      <IngressLogo
        src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1"
        alt="ingressive for goog logo"
      />
    </FooterContainer>
  );
};

export default Footer;
