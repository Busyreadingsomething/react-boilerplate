import React from 'react';
import { object } from 'prop-types';

import { ListWrapper } from './ListWrapper';
import Item from '../Item';

const List = ({ list }) => (
  <ListWrapper>
    {list.map(item => <Item key={item.id} note={item.note} />)}
  </ListWrapper>
);

List.propTypes = {
  list: object.isRequired,
};

export default List;
