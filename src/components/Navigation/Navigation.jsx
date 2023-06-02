import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';

import Filter from 'components/Filter/Filter';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Navigation = () => {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Container>
        <Toolbar disableGutters>
          <Nav>
            <Box sx={{ display: 'flex' }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/tweets">
                Tweets
              </Button>
            </Box>
          </Nav>
          <Filter />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
