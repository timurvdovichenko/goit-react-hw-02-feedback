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

export const ListStyled = styled.ul`
  display: flex;
  margin-left: 30px;
  flex-direction: ${props => props.column};
`;
export const ListItemStyled = styled.li`
  list-style: none;
  padding: 2px;
`;
export const H2Styled = styled.h2`
  display: block;
  margin: 30px;
  font-size: 24px;
`;
export const PararagraphStyled = styled.p`
  display: inline-block;
  margin: 15px 15px 15px 30px;
  font-size: 16px;
`;
