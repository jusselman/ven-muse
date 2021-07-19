import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Buy from '../Buy/Buy';

import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header/Header';
import Songs from '../../components/Songs/Songs';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  typography: {
    fontFamily: 'Tourney',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path='/' render={() =>
          <Home
          />
        } />
        <Route exact path='/Buy' render={() =>
          <Buy
          />
        } />

      </Switch>

    </div>
  );
}



