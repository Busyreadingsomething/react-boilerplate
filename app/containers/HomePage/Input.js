import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  font-size: 1.1rem;
  width: 100%;
  font-weight: bolder;
  border: 1px solid blue;
  border-radius: 20px;
  padding-left: 15px;
  line-height: 1.1rem;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export default Input;
