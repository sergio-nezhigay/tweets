import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';

import { ButtonFilterStyled } from './Filter.styled';
import { setFilter } from 'redux/users/usersSlice';
import useUsers from 'hooks';
import { SHOW_ALL, SHOW_FOLLOW, SHOW_FOLLOWING } from 'constants';

const filterOptions = [
  { value: SHOW_ALL, label: 'Show All' },
  { value: SHOW_FOLLOW, label: 'Follow' },
  { value: SHOW_FOLLOWING, label: 'Followings' },
];

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useUsers();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterChange = selectedFilter => {
    dispatch(setFilter(selectedFilter));
    setAnchorEl(null);
  };

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const selectorText =
    filter === SHOW_ALL ? `Filter tweets` : `Filtered by: ${filter}`;

  return (
    <div>
      <ButtonFilterStyled id="filter" onClick={handleMenuOpen}>
        {selectorText}
      </ButtonFilterStyled>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {filterOptions.map(option => (
          <MenuItem
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
            selected={filter === option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
