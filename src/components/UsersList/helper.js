export const addFavoriteUser = userId => {
  const favoriteUsers = JSON.parse(localStorage.getItem('favoriteUsers')) || [];
  favoriteUsers.push(userId);
  localStorage.setItem('favoriteUsers', JSON.stringify(favoriteUsers));
};

export const removeFavoriteUser = userId => {
  const favoriteUsers = JSON.parse(localStorage.getItem('favoriteUsers')) || [];
  const updatedFavoriteUsers = favoriteUsers.filter(id => id !== userId);
  localStorage.setItem('favoriteUsers', JSON.stringify(updatedFavoriteUsers));
};

export const isFavoriteUser = userId => {
  const favoriteUsers = JSON.parse(localStorage.getItem('favoriteUsers')) || [];
  return favoriteUsers.includes(userId);
};
