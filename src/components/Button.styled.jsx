import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  margin: 0 0.5em;
  padding: 0.25em 1em;
  text-transform: capitalize;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    scale: 1.01;
  }
`;
