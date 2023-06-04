import { useSelector } from 'react-redux';

import {
  selectUsers,
  selectTotalUsers,
  selectCurrentPage,
  selectIsLoading,
  selectFilter,
} from 'redux/users/selectors';

import { selectFavoriteUserIds } from 'redux/favorites/selectors';

export default function useAuth() {
  const totalUsers = useSelector(selectTotalUsers);
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectCurrentPage);
  const favoriteUserIds = useSelector(selectFavoriteUserIds);

  return {
    totalUsers,
    users,
    filter,
    isLoading,
    page,
    favoriteUserIds,
  };
}
