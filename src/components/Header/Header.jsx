import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#FFFFFF',
        fontFamily: 'Tourney',
    },
    icon: {
        color: '#FFFFFF',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    landingTitle: {
        fontFamily: 'Tourney',
        color: '#FFFFFF',
        textAlign: 'center',
        margin: 0,
    },
    landingAlt: {
        color: '#ffbe8a',
    },
    tracks: {
        color: '#FFFFFF',
        fontSize: '2rem',
    },
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return <div className={classes.root}>
        <Slide
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 2500 } : {})}
            collapsedHeight={100}
        >
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Ven-Muse</h1>
                    <IconButton>
                        <MusicNoteIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Slide>
        <Grow
            in={checked}
            style={{ transformOrigin: '0 0 0' }}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={5}
        >
            <div className={classes.container}>
                <h1 className={classes.landingTitle}>
                    Lorem ipsum
                    <br />
                    <span className={classes.landingAlt}>
                        dolor sit amet
                    </span>
                </h1>
                <IconButton>
                    <Link activeClass="active" to="songs" spy={true} smooth={true}>
                        <QueueMusicIcon className={classes.tracks} />
                    </Link>
                </IconButton>
            </div>
        </Grow>
    </div>
}