import styled from 'styled-components';

export const UserCard = styled.li`
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

export const TweetsImage = styled.img`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  z-index: 0;
`;

export const Avatar = styled.img`
  position: relative;
  max-width: 62.5px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
`;

export const RoundBG = styled.div`
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

export const UserInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Line = styled.div`
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
export const LogoWrapper = styled.div`
  padding: 20px;
  height: 50%;
`;
export const Details = styled.div`
  padding-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
