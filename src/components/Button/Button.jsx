import React, { useState } from 'react';
import { Button } from './Button.styled';

function FollowButton({ amIFollow, onClick }) {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
    onClick();
  };

  return (
    <Button amIFollow={amIFollow} animate={animate} onClick={handleClick}>
      {amIFollow ? 'Following' : 'Follow'}
    </Button>
  );
}

export default FollowButton;
