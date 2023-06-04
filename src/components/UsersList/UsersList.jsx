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
  const { totalUsers, users, filter, isLoading, page, favoriteUserIds } =
    useUsers();

  useEffect(() => {
    if (page === 1) {
      dispatch(loadMoreUsers());
    }
  }, [dispatch, page, filter]);

  useEffect(() => {
    dispatch(countUsers());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreUsers(page));
  };

  const filteredUsers = useMemo(() => {
    const isUserFavorite = id => favoriteUserIds.indexOf(id) !== -1;
    return users.filter(user => {
      switch (filter) {
        case SHOW_ALL:
          return true;
        case SHOW_FOLLOWING:
          return isUserFavorite(user.id);
        case SHOW_FOLLOW:
          return !isUserFavorite(user.id);
        default:
          return true;
      }
    });
  }, [users, filter, favoriteUserIds]);

  const isLoadmoreButtonVisible =
    totalUsers / USERS_PER_PAGE > page || totalUsers > filteredUsers.length;
  const isLoadMoreButtonText = isLoading ? `Loading...` : `Load more`;
  const isUserFavorite = id => favoriteUserIds.indexOf(id) !== -1;
  return (
    <>
      {!!filteredUsers.length && (
        <>
          <UserListStyled>
            {filteredUsers.map((user, index) => {
              return (
                <User
                  key={user.id}
                  {...user}
                  isLast={index === users.length - 1}
                  isFavorite={isUserFavorite(user.id)}
                />
              );
            })}
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
