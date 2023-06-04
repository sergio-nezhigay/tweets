import styled, { keyframes } from 'styled-components';

export const FollowButtonStyled = styled.button`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  height: 50px;
  min-width: 196px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background: ${({ amIFollow }) => (amIFollow ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  animation: ${({ animate }) => animate && shakeAnimation} 1s infinite;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${({ amIFollow }) =>
      amIFollow ? '#5cd3a7c2' : '#ebd8ffce'};
  }
`;

const shakeAnimation = keyframes`
  0%  { transform: translate(2px, 1px)   rotate(0deg);  }
  10% { transform: translate(-1px, -2px) rotate(-2deg); }
  20% { transform: translate(-3px, 0px)  rotate(3deg);  }
  30% { transform: translate(0px, 2px)   rotate(0deg);  }
  40% { transform: translate(1px, -1px)  rotate(1deg);  }
  50% { transform: translate(-1px, 2px)  rotate(-1deg); }
  60% { transform: translate(-3px, 1px)  rotate(0deg);  }
  70% { transform: translate(2px, 1px)   rotate(-2deg); }
  80% { transform: translate(-1px, -1px) rotate(4deg);  }
  90% { transform: translate(2px, 2px)   rotate(0deg);  }
  100%{ transform: translate(1px, -2px)  rotate(-1deg); }
`;
