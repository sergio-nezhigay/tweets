import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/filter/filterSelectors';
import { selectUsers, selectTotalUsers } from 'redux/users/selectors';
import { fetchUsers, fetchUsersInit, countUsers } from 'redux/users/operations';
import {
  USERS_PER_PAGE,
  SHOW_ALL,
  SHOW_FOLLOW,
  SHOW_FOLLOWING,
} from 'constants';
import User from 'components/User/User';
import { UserList, LoadMoreButton } from './UserList.styled';

export default function UsersList() {
  const dispatch = useDispatch();
  const totalUsers = useSelector(selectTotalUsers);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchUsersInit());
    } else {
      dispatch(fetchUsers({ page }));
    }
  }, [dispatch, page]);

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
    <>
      {!!filteredUsers.length && (
        <>
          <UserList>
            {filteredUsers.map((user, index) => (
              <User
                key={user.id}
                {...user}
                isLast={index === users.length - 1}
              />
            ))}
          </UserList>
          {isLoadmoreButtonVisible && (
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
          )}
        </>
      )}
    </>
  );
}
