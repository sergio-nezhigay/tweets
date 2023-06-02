import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import User from 'components/User/User';

import { selectUsers } from 'redux/users/selectors';
import { fetchUsers } from 'redux/users/operations';

const UsersListContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

const UserListTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
  list-style: none;
  padding: 0;
`;

const LoadMoreButton = styled.button`
  background-color: #555;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchUsers({ page }));
  }, [page, dispatch]);
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <UsersListContainer>
      <UserListTitle>UsersList</UserListTitle>
      <UserList>
        {users.map((user, index) => (
          <User key={user.id} {...user} isLast={index === users.length - 1} />
        ))}
      </UserList>

      <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
    </UsersListContainer>
  );
}
