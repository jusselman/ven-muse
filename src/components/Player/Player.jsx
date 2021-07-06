import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirecton: 'column',
        background: '#000000',
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '100px',
        // height: '100px',
    },
    songTitle: {
        fontSize: '.75rem',
        color: '#ffbe8a',
    },
    artistTitle: {
        fontSize: '.75rem',
        color: '#ffbe8a',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: theme.spacing(1),
        // paddingBottom: theme.spacing(1),
        background: '#000000',
    },
    controlBtn: {
        color: '#ffbe8a',
        padding: 0,
        background: '#000000',
        // boxShadow: 'inset 1px 1px 10px #333',
    },
    playIcon: {
        // height: 38,
        // width: 38,
    },
}));

export default function Player() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={process.env.PUBLIC_URL + '/assets/img/song.png'}
                title="Live from Hell"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.songTitle}>
                        Teeth For Wheels
                    </Typography>
                    <Typography className={classes.artistTitle}>
                        Ysecseeyou
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton className={classes.controlBtn} aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton className={classes.controlBtn} aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton className={classes.controlBtn} aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div>
            </div>

        </Card>
    );
}