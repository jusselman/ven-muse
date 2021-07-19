import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Player from '../Player/Player';

const useStyles = makeStyles((theme) => ({


}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root} id='songs'>
            <Player />
        </div>
    )
}