import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1100px;
  width: 100%;
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

export const Avi = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
  border-radius: 100%;
`;

export const Share = styled.div`
  position: absolute;
  font-size: 26px;
  right: 15%;
  top: -30px;
  border: 1px dotted #D0D5DD;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #98A2B3;
`;