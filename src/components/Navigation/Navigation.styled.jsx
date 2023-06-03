import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.3s background-color;
  &:hover {
    background-color: #ebce2781;
  }
  &.active {
    background-color: #ebcf27;
  }
`;
