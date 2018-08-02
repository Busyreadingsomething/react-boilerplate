import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  background-color: #90caf9;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bolder;
  height: 40px;
  justify-content: center;
  margin: 10px;
  padding: 5px 10px;
  transition: all 0.2s ease-in-out;
  width: auto;
  &:hover {
    transform: scale(1.05);
  }
  display: ${({ active }) => (active ? 'flex' : 'none')};
`;

export default Button;
