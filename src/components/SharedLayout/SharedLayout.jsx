import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from './SharedLayout.styled';
import Navigation from 'components/Navigation';

export default function SharedLayout() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>Loading the app...</h2>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
}
