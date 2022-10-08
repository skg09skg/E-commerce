import Loader from '../components/loader';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnimatedRoutes from '../utils/animatedRoutes';
import Header from '../pages/header';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <HelmetProvider>
        <Helmet>
          <title>E-Commerce</title>
          <meta name='description' content='' />
          <meta name='keywords' content='Buy | Sell | Order | Electronic and accesories' />
          <meta name='description' content='Introducing a E-Commerce shop online' />
        </Helmet>
      </HelmetProvider>
      <AnimatedRoutes />
    </React.Suspense>
  );
};

export default Router;
