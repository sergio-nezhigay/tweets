import styled from 'styled-components';

export const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #1e90ff;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  margin-bottom: 25px;
  color: #333;
`;

export const FollowButton = styled.button`
  padding: 10px 20px;
  background-color: #5cd3a8;
  color: #373737;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff6347;
  }
`;
