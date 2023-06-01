import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${({ amIFollow }) => (amIFollow ? '#ffffff' : '#373737')};
  padding: 14px 39px;
  margin-top: 10px;
  background: ${({ amIFollow }) => (amIFollow ? '#ff0000' : '#5cd3a8')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

function FollowButton({ amIFollow, onClick }) {
  return (
    <Button amIFollow={amIFollow} onClick={onClick}>
      {amIFollow ? 'Following1' : 'Follow1'}
    </Button>
  );
}

export default FollowButton;
