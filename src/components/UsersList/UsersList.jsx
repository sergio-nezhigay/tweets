import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import User from 'components/User/User';

import { selectFilter } from 'redux/filter/filterSelectors';
import { selectUsers, selectTotalUsers } from 'redux/users/selectors';
import { fetchUsers, countUsers } from 'redux/users/operations';
import {
  USERS_PER_PAGE,
  SHOW_ALL,
  SHOW_FOLLOW,
  SHOW_FOLLOWING,
} from 'constants';

const UsersListContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
`;

const UserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 32px;
  list-style: none;
  justify-items: center;
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
  const totalUsers = useSelector(selectTotalUsers);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers({ page }));
  }, [page, dispatch]);

  useEffect(() => {
    dispatch(countUsers(filter));
  }, [filter, dispatch]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const filteredUsers = users.filter(user => {
    switch (filter) {
      case SHOW_ALL:
        return true;
      case SHOW_FOLLOWING:
        if (user.amIFollow) {
          return true;
        } else {
          return false;
        }
      case SHOW_FOLLOW:
        if (!user.amIFollow) {
          return true;
        } else {
          return false;
        }
      default:
        return true;
    }
  });

  const isLoadmoreButtonVisible = totalUsers / USERS_PER_PAGE > page;

  return (
    <UsersListContainer>
      <UserList>
        {filteredUsers.map((user, index) => (
          <User key={user.id} {...user} isLast={index === users.length - 1} />
        ))}
      </UserList>
      {isLoadmoreButtonVisible && (
        <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
      )}
    </UsersListContainer>
  );
}
