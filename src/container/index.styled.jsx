import styled, { css } from 'styled-components';
import { devices } from '../styles/breakpoints';

export const Main = styled.main`
  max-width: 1100px;
  width: 90%;
  margin: 50px auto 100px auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px
`;

export const TwitterName = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #101828;
  text-align: center;
`;

export const SlackName = styled.h3`
  display: none;
`;

export const Icon = styled.span`
${(props) => {
  switch (props.$mode) {
    case 'cam':
      return css`
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        color: white;
        font-size: 25px;
      `;
    default:
      return css`
        color: #98A2B3;
        font-size: 26px;
      `;
  }
}}

  @media ${devices.mtablet} {
    ${(props) => {
      switch (props.$mode) {
        case 'cam':
      return css`
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        color: white;
        font-size: 25px;
      `;
      case 'more':
          return css`
            display: none;
          `;
        default:
          return css`
            display: block;
          `;
      }
    }}
  }
  @media ${devices.tablet} {
    ${(props) => {
      switch (props.$mode) {
        case 'cam':
      return css`
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        color: white;
        font-size: 25px;
      `;
      case 'more':
          return css`
            display: block;
          `;
        default:
          return css`
            display: none;
          `;
      }
    }}
  }
`;


export const Avi = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
  border-radius: 100%;
  background-image: url('https://images.nappy.co/uploads/large/20200905-doryus-4258-2001599358408fhrsfpc68vagsgynjlikyxocgmqxjlikvpdzftm5blnucjtvtljcckopnawo9dtpfhlhyjkazcjybwnal8dd8dijj5ocsvyyxhzn.jpg?auto=format&w=1280&q=75');
  background-position: center;
  background-size: cover;
  position: relative;


  &:hover {
    background: linear-gradient(0deg, rgba(52, 64, 84, 0.75), rgba(52, 64, 84, 0.75)), url('https://images.nappy.co/uploads/large/20200905-doryus-4258-2001599358408fhrsfpc68vagsgynjlikyxocgmqxjlikvpdzftm5blnucjtvtljcckopnawo9dtpfhlhyjkazcjybwnal8dd8dijj5ocsvyyxhzn.jpg?auto=format&w=1280&q=75');
    background-position: center;
    background-size: cover;
    position: relative;
  }

  &:hover ${Icon}{ 
    display: inline;
  }

  &:focused {
    border: 3px solid;
  }

`;

export const Tooltip = styled.div`
  padding: 8px 12px;
  position: absolute;
  background-color: #101828;
  font-size 12px;
  text-align: center;
  left: -85px;
  color: white;
  border-radius: 8px;
  display: none;
  box-shadow: 0px 3px 8px 1px #22222244;
 
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }
`;

export const Share = styled.div`
  position: absolute;
  right: 15%;
  top: -30px;
  border: 1px dotted #D0D5DD;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  

  &:hover ${Tooltip}{ 
    display: inline;
  }
  &:hover {
    background-color: #F9FAFB;
    color: #D0D5DD;
  }

  @media ${devices.tablet}{
    right: 0;
  }
`;
