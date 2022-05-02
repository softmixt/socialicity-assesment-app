import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Loader from './components/Loader';
import NotFoundPage from './pages/404NotFoundPage';

const CustomerLayout = React.lazy(() => import('parts/layout/CustomerLayout'));

const UsersIndexPage = React.lazy(() => import('./pages/customer/users/UsersListPage'));
const UsersNewIndexPage = React.lazy(() => import('./pages/customer/users/UsersNewPage'));
const UsersEditIndexPage = React.lazy(() => import('./pages/customer/users/UsersEditPage'));
const UsersViewIndexPage = React.lazy(() => import('./pages/customer/users/UsersViewPage'));

function AppRouter() {
  return (
    <BrowserRouter basename="/socialicity-assesment-app/">
      <Routes>

        {/* Supposed public routes .... */}
        <Route path="/">
          <Route index element={<Navigate to="/customer/users" />} />
        </Route>

        {/* Supposed protected customer routes .... */}
        <Route path="/customer" element={(<Suspense fallback={<Loader />}><CustomerLayout /></Suspense>)}>
          <Route index element={<Navigate to="/customer/users" />} />
          <Route path="users" element={(<Suspense fallback={<Loader />}><UsersIndexPage /></Suspense>)} />
          <Route path="users/new" element={(<Suspense fallback={<Loader />}><UsersNewIndexPage /></Suspense>)} />

          <Route path="users/edit/:userId" element={(<Suspense fallback={<Loader />}><UsersEditIndexPage /></Suspense>)} />
          <Route path="users/view/:userId" element={(<Suspense fallback={<Loader />}><UsersViewIndexPage /></Suspense>)} />

        </Route>

        {/* shared 4o4 page .... */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
