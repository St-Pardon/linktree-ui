import styled from 'styled-components';
import { devices } from '../../styles/breakpoints';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  @media ${devices.mobileL}{
    flex-wrap: wrap;
  }
`;

export const Zuri = styled.h3`
  font-size: 1.5rem;
  color: #000000;
  font-weight: 700;
  display: flex;
  gap: 5px;
  @media ${devices.mobileL}{
    font-size: 1rem;
    gap: 3px;
  }
`;

export const Hng = styled.h3`
  font-size: 1rem;
  color: #667085;
  font-family: inter;
  font-weight: 400;
  line-height: 24px;
  @media ${devices.mobileL}{
    font-size: 0.7rem;
  }
`;

export const IngressLogo = styled.img`
  width: 132px;
  @media ${devices.mobileL}{
    width: 70px;
  }`;

export const Bull = styled.span`
  color: #ff0000;
  align-self: flex-end;
`;
