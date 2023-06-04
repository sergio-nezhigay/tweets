import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FollowButtonStyled } from './FollowButton.styled';

export default function FollowButton({ isFavorite, onClick }) {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
    onClick();
  };

  return (
    <FollowButtonStyled
      isfavorite={isFavorite ? 'true' : ''}
      animate={animate ? 'true' : ''}
      onClick={handleClick}
    >
      {isFavorite ? 'Following' : 'Follow'}
    </FollowButtonStyled>
  );
}

FollowButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
