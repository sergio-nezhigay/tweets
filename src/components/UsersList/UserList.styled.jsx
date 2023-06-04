import styled from 'styled-components';

export const UserListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
  list-style: none;
  justify-items: center;
  margin-bottom: 32px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 14px 39px;
  border-radius: 10px;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;
  color: #ffffff;
  font-weight: 600;
  background-color: #29479f;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ebcf27;
  }
  &.active {
    color: #3c5ca7;
    background-color: #ebcf27;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
