import styled from 'styled-components';

const Input = styled.input`
  border-bottom: 1px solid grey;
  font-size: 1.1rem;
  font-weight: bolder;
  height: 40px;
  line-height: 1.1rem;
  padding-left: 10px;
  transition: all 0.4s ease-in-out;
  width: 145px;
  display: ${({ active }) => (active ? 'block' : 'none')};

  &:focus {
    outline: none;
    width: 100%;
  }
`;

export default Input;
