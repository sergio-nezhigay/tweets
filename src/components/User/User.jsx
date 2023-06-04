import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUser } from 'redux/users/operations';
import {
  addFavoriteUser,
  removeFavoriteUser,
} from 'redux/favorites/favoritesSlice';

import FollowButton from 'components/FollowButton';

import logoImage from 'images/logo.svg';
import tweetsImage from 'images/tweets.png';

import {
  Details,
  UserInfo,
  RoundBG,
  Avatar,
  Line,
  UserCard,
  LogoWrapper,
  TweetsImage,
} from './User.styled';

export default function User({
  id,
  user,
  avatar,
  tweets,
  followers,
  // amIFollow,
  isLast,
  isFavorite,
}) {
  const dispatch = useDispatch();
  const imageRef = useRef();

  const onFollowClick = () => {
    const updatedUser = {
      id,
      user,
      avatar,
      tweets,
      followers: isFavorite ? followers - 1 : followers + 1,
    };

    if (!isFavorite) {
      dispatch(addFavoriteUser(id));
    } else {
      dispatch(removeFavoriteUser(id));
    }

    dispatch(updateUser(updatedUser));
  };

  useEffect(() => {
    if (isLast) {
      imageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end',
      });
    }
  }, [isLast]);

  function formatNumberWithComma(number) {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return (
    <UserCard ref={isLast ? imageRef : null}>
      <LogoWrapper>
        <img src={logoImage} alt="logo GoIT" />
      </LogoWrapper>
      <TweetsImage src={tweetsImage} alt="tweets decoration" />
      <RoundBG>
        <Avatar src={avatar} alt={user} />
      </RoundBG>
      <Line />
      <Details>
        <UserInfo>Tweets: {tweets}</UserInfo>
        <UserInfo>Followers: {formatNumberWithComma(followers)}</UserInfo>
        <FollowButton isFavorite={isFavorite} onClick={onFollowClick} />
      </Details>
    </UserCard>
  );
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};
