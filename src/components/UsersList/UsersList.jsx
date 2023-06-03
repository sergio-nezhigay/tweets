import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/users/selectors';

import {
  selectUsers,
  selectTotalUsers,
  selectCurrentPage,
} from 'redux/users/selectors';

import { incrementPage, resetPagination } from 'redux/users/usersSlice';

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
  const totalUsers = useSelector(selectTotalUsers);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const page = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(loadMoreUsers({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(resetPagination());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(countUsers(filter));
  }, [filter, dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
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
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
          )}
        </>
      )}
    </>
  );
}
