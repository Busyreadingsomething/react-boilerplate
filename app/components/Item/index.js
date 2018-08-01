import React from 'react';
import { string } from 'prop-types';
import { P } from './P';

const Item = ({ note }) => <P>{note}</P>;

Item.propTypes = {
  note: string.isRequired,
};

export default Item;
