import React from 'react';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header/Header';
import Songs from '../../components/Songs/Songs';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/buyBg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    typography: {
        fontFamily: 'Tourney',
    },
    testing: {
        fontSize: '100px',
        color: '#ffffff',
    },
}));
export default function Buy() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <h1 className={classes.testing}>Enter <br></br>Payment <br></br>Info</h1>

        </div>
    )
}
