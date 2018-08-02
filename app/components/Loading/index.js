import styled from 'styled-components';

const Loading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export default Loading;
