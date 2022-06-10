import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '@/pages/Home';

import PrivateRoute from './PrivateRoutes';

interface PageI {
  name: string;
  path: string;
  element: React.ReactNode;
}

function RoutesConfig() {
  const pages = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '*',
      element: <div>Page not found</div>
    }
  ];

  const pagesPrivate: PageI[] = [];
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<PrivateRoute />}>
        {pagesPrivate.map((page: any) => (
          <Route key={page.name} path={page.path} element={page.element} />
        ))}
      </Route>

      {pages.map((page: any) => (
        <Route key={`${page.name}`} path={page.path} element={page.element} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;
