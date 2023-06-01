import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';

import { Link, Nav } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
