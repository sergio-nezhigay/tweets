import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import useUsers from 'hooks';

import { loadMoreUsers, countUsers } from 'redux/users/operations';
import {
  USERS_PER_PAGE,
  SHOW_ALL,
  SHOW_FOLLOW,
  SHOW_FOLLOWING,
} from 'constants';
import User from 'components/User';

import { UserListStyled, LoadMoreButton } from './UserList.styled';

export default function UsersList() {
  const dispatch = useDispatch();
  const { totalUsers, users, filter, isLoading, page } = useUsers();

  useEffect(() => {
    if (page === 1) {
      dispatch(loadMoreUsers({ filter }));
    }
  }, [dispatch, page, filter]);

  useEffect(() => {
    dispatch(countUsers(filter));
  }, [filter, dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreUsers({ page, filter }));
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      switch (filter) {
        case SHOW_ALL:
          return true;
        case SHOW_FOLLOWING:
          return user.amIFollow;
        case SHOW_FOLLOW:
          return !user.amIFollow;
        default:
          return true;
      }
    });
  }, [users, filter]);

  const isLoadmoreButtonVisible =
    totalUsers / USERS_PER_PAGE > page || totalUsers > filteredUsers.length;
  const isLoadMoreButtonText = isLoading ? `Loading...` : `Load more`;

  return (
    <>
      {!!filteredUsers.length && (
        <>
          <UserListStyled>
            {filteredUsers.map((user, index) => (
              <User
                key={user.id}
                {...user}
                isLast={index === users.length - 1}
              />
            ))}
          </UserListStyled>

          {isLoadmoreButtonVisible && (
            <LoadMoreButton onClick={handleLoadMore} disabled={isLoading}>
              {isLoadMoreButtonText}
            </LoadMoreButton>
          )}
        </>
      )}
    </>
  );
}
