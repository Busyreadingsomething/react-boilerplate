import styled from 'styled-components';

export const ListWrapper = styled.div`
  align-items: flex-start;
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.75);
  flex-flow: column;
  justify-content: flex-start;
  padding: 0 5px;
  display: ${({ active }) => (active ? 'flex' : 'none')};
`;
