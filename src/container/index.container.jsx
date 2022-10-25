import React from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import ListItems from '../component/listItem/list';
import {
  Avi,
  Main,
  Section,
  SlackName,
  Share,
  TwitterName,
} from './index.styled';
import { apidata } from '../assets/apidata';

const LandingPage = () => {
  return (
    <Main>
      <Share>
        <RiShareForwardLine />
      </Share>
      <Section>
        <Avi
          id="profile_img"
          src="https://images.nappy.co/uploads/large/20200905-doryus-4258-2001599358408fhrsfpc68vagsgynjlikyxocgmqxjlikvpdzftm5blnucjtvtljcckopnawo9dtpfhlhyjkazcjybwnal8dd8dijj5ocsvyyxhzn.jpg?auto=format&w=1280&q=75"
        />
        <TwitterName id="twitter">Onyedikachi</TwitterName>
        <SlackName id="slack">Onyedikachi Onu</SlackName>
      </Section>
      <Section>
        {apidata.map((item, i) => (
          <ListItems key={i} dest={item.dest} name={item.name} id={item.id} />
        ))}
      </Section>
    </Main>
  );
};

export default LandingPage;
