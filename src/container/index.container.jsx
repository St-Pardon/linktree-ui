import React from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosMore } from 'react-icons/io';
import ListItems from '../component/listItem/list';
import {
  Avi,
  Main,
  Section,
  SlackName,
  Share,
  TwitterName,
  Tooltip,
  Icon,
} from './index.styled';
import { apidata } from '../assets/apidata';
import { MdOutlinePhotoCamera } from 'react-icons/md';

const LandingPage = () => {
  return (
    <Main>
      <Share>
        <Icon $mode="share">
          <RiShareForwardLine />
        </Icon>
        <Icon $mode="more">
          <IoIosMore />
        </Icon>
        <Tooltip>Share Link</Tooltip>
      </Share>
      <Section>
        <Avi id="profile_img">
          <Icon $mode="cam">
            <MdOutlinePhotoCamera />
          </Icon>
        </Avi>
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
