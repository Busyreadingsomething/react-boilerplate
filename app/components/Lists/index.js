import React from 'react';
import { arrayOf, bool, object } from 'prop-types';

import { ListWrapper } from './ListWrapper';
import Item from '../Item';

const List = ({ active, list }) => (
  <ListWrapper active={active}>
    {list.map(item => <Item key={item.id} note={item.note} />)}
  </ListWrapper>
);

List.propTypes = {
  active: bool.isRequired,
  list: arrayOf(object).isRequired,
};

export default List;
