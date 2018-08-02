import styled from 'styled-components';

export const P = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  margin: 10px 0;
  min-height: 40px;
  padding: 5px 10px;
  transition: background-color 0.2s ease-in-out;
  width: 100%;
  &:hover {
    background-color: grey;
  }
`;
