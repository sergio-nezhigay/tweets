import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/';

const HomeView = lazy(() => import('Pages/HomeView'));
const TweetsPage = lazy(() => import('Pages/TweetsPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeView />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
}
