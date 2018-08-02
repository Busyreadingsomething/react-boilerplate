import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  background-color: #90caf9;
  border: 0px;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 2em;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export default NavLink;
