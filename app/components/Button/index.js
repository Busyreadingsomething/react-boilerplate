import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  border: 2px solid #4286f4;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bolder;
  height: 40px;
  justify-content: center;
  margin: 10px;
  padding: 5px 10px;
  width: auto;
  display: ${({ active }) => (active ? 'flex' : 'none')};
`;

export default Button;
