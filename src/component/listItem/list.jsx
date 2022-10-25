import React from 'react';
import { Anchor, List } from './list.styled';

const ListItems = ({ dest, name, id }) => {
  return (
    <Anchor href={dest}>
      <List id={id}>{name}</List>
    </Anchor>
  );
};

export default ListItems;
