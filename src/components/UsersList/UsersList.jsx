import React from 'react';
import styled from 'styled-components';
import User from 'components/User/User';
import { useFetchUsersQuery } from 'redux/contacts/usersAPI';

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

export default function UsersList() {
  const { data: users = [] } = useFetchUsersQuery();
  console.log('🚀 ~ file: TweetsPage.jsx:6 ~ TweetsPage ~ users:', users);

  return (
    <UsersListContainer>
      <UserListTitle>UsersList</UserListTitle>
      <UserList>
        {users.slice(0, 3).map(user => (
          <User key={user.id} {...user} />
        ))}
      </UserList>
    </UsersListContainer>
  );
}
