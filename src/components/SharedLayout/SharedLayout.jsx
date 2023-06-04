import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from './SharedLayout.styled';
import Navigation from 'components/Navigation';

export default function SharedLayout() {
  return (
    <Container>
      <div>
        <Toaster />
      </div>
      <Navigation />
      <Suspense fallback={<h2>Loading the app...</h2>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
}
