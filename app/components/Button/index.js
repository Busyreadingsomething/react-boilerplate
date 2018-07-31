import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: 80px;
  padding: 5px 10px;
  border: 2px solid #4286f4;
  font-size: 1.1rem;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export default Button;
