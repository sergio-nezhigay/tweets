import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import tweetsImage from 'images/tweets.png';
import { updateUser } from 'redux/users/operations';
import logoImage from 'images/logo.svg';
import FollowButton from 'components/Button/Button';

const UserCard = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  color: #ebd8ff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const TweetsImage = styled.img`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  z-index: 0;
`;

const Avatar = styled.img`
  position: relative;
  max-width: 80%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
`;

const RoundBG = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  z-index: 1;
`;

const UserInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Line = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 380px;
  height: 8px;
  left: 0px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  z-index: 0;
`;
const LogoWrapper = styled.div`
  padding: 20px;
  height: 50%;
`;
const Details = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function User({ id, user, avatar, tweets, followers, amIFollow, isLast }) {
  const dispatch = useDispatch();
  const imageRef = useRef();
  const onFollowClick = () => {
    const updatedUser = {
      id,
      user,
      avatar,
      tweets,
      followers,
      amIFollow: !amIFollow,
    };
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
  const followersUI = amIFollow ? followers + 1 : followers;

  const formattedNumber = formatNumberWithComma(followersUI);

  return (
    <UserCard ref={isLast ? imageRef : null}>
      <LogoWrapper>
        <img src={logoImage} alt="logo GoIT" />
      </LogoWrapper>
      <TweetsImage src={tweetsImage} alt="tweets" />
      <RoundBG>
        <Avatar src={avatar} alt={user} />
      </RoundBG>
      <Line />
      <Details>
        <UserInfo>Tweets: {tweets}</UserInfo>
        <UserInfo>Followers: {formattedNumber}</UserInfo>
        <FollowButton amIFollow={amIFollow} onClick={onFollowClick} />
      </Details>
    </UserCard>
  );
}

export default User;
