import React from 'react';
import ListItems from '../component/listItem/list';
import { Main, Section } from './index.styled';
import { apidata } from '../assets/apidata';

const LandingPage = () => {
  return (
    <Main>
      <Section></Section>
      <Section>
        {apidata.map((item, i) => (
          <ListItems key={i} desc={item.desc} name={item.name} id={item.id} />
        ))}
      </Section>
    </Main>
  );
};

export default LandingPage;
