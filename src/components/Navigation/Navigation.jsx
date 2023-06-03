import { AppBar, Toolbar, Container, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Filter from 'components/Filter';

import { Nav, NavLinkStyled } from './Navigation.styled';

export default function Navigation() {
  const location = useLocation();
  const isTweetsRoute = location.pathname === '/tweets';

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#29479F' }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Nav>
            <Box sx={{ display: 'flex' }}>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
            </Box>
          </Nav>
          {isTweetsRoute && (
            <>
              <Filter />
              <NavLinkStyled to="/">Back</NavLinkStyled>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
