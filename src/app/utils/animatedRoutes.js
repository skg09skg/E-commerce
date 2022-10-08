import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import UserLogin from '../pages/auth/userlogin';


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={UserLogin} />
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;