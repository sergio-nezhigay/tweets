import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';

import { ButtonFilterStyled } from './Filter.styled';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { SHOW_ALL, SHOW_FOLLOW, SHOW_FOLLOWING } from 'constants';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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

  return (
    <div>
      <ButtonFilterStyled id="filter" onClick={handleMenuOpen}>
        Filter tweets
      </ButtonFilterStyled>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => handleFilterChange(SHOW_ALL)}
          selected={filter === SHOW_ALL}
        >
          Show All
        </MenuItem>
        <MenuItem
          onClick={() => handleFilterChange(SHOW_FOLLOW)}
          selected={filter === SHOW_FOLLOW}
        >
          Follow
        </MenuItem>
        <MenuItem
          onClick={() => handleFilterChange(SHOW_FOLLOWING)}
          selected={filter === SHOW_FOLLOWING}
        >
          Followings
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Filter;
