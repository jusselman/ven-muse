import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from '@material-ui/core';

const styles = {
    root: {
        fontFamily: 'Tourney',
    },
    list: {
        width: 350,
    },
    fullList: {
        width: "auto"
    },
    paper: {
        background: "#000",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Tourney',
        fontSize: '6rem',
    },
    listItem: {
        color: '#ffbe8a',
        textAlign: 'center',
        fontSize: '10rem',
        // fontFamily: 'Tourney',
    },
    MuiTypographyBody1: {
        fontFamily: 'Tourney',
        fontSize: '10rem',
    },
    navBtn: {
        color: 'rgba(0,0,0,0)',
    },
};

class TemporaryDrawer extends React.Component {

    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Tracks', 'About', 'Contact'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText
                                className={classes.listItem}
                                primary={text}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div>
                <Button className={classes.navBtn} onClick={this.toggleDrawer("left", true)}>Left</Button>
                <Drawer
                    classes={{ paper: classes.paper }}
                    open={this.state.left}
                    onClose={this.toggleDrawer("left", false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer("left", false)}
                        onKeyDown={this.toggleDrawer("left", false)}
                        classes={{ root: classes.root }}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);


// //////////////////////////////////////////////
// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const useStyles = makeStyles({
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: 'auto',
//     },
//     navBtn: {
//         padding: '6px 8px',
//         position: 'absolute',
//         right: '1px',
//         top: '7px',
//         color: 'rgba(0,0,0,0)',
//     },
//     listItem: {
//         color: '#ffbe8a',

//     },
//     anchor: {
//         background: '#000000',
//     },
//     MuiListItemTextRoot: {
//         fontFamily: 'Tourney',
//     },
//     paper: {
//         background: '#000000',
//         fontFamily: 'Tourney',
//     },
// });

// export default function TemporaryDrawer() {
//     const classes = useStyles();
//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//     });

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor) => (
//         <div
//             className={clsx(classes.list, {
//                 [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//             })}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//         >
//             <List>
//                 {['Tracks', 'About', 'Contact'].map((text, index) => (
//                     <ListItem className={classes.listItem} button key={text}>
//                         {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
//                         <ListItemText primary={text} />
//                     </ListItem>
//                 ))}
//             </List>

//         </div>
//     );

//     return (
//         <div>
//             {['left'].map((anchor) => (
//                 <React.Fragment key={anchor}>
//                     <div className={classes.navBtn} onClick={toggleDrawer(anchor, true)}>{anchor}</div>
//                     <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//                         {list(anchor)}
//                     </Drawer>
//                 </React.Fragment>
//             ))}
//         </div>
//     );
// }