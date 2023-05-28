import styled from 'styled-components';

export const ListItemStyled = styled.li`
  list-style: none;
  padding: 2px;
`;

export const ListStyled = styled.ul`
  display: flex;
  margin-left: 30px;
  flex-direction: ${props => props.column};
`;
