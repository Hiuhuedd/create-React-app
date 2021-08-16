import {
    AppBar,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
    alpha,
    Badge,
    Avatar,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    search: {
        display: "flex",
        alignItems: "center",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: (props) => (props.open ? 'flex' : 'none'),
        }, width: '70%',
    },
    icons: {
       
        alignItems: "center",
        display: (props) => (props.open ? 'none' : 'flex'),
    },
    input: {
        color: "white",
        margin: '8px',
       
    },
    cancle: {
        display: "none",
        color: "white",
        marginLeft:'50%',
        paddingRight:'5%',
        // margin: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
    },
    badge: {
        margin: theme.spacing(2),
    },
    logoLarge: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSmall: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },

    searchBtn: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
        margin: theme.spacing(2),
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open });
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.logoLarge}>Material-UI</Typography>
                    <Typography className={classes.logoSmall}>UI</Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase className={classes.input} placeholder="search" />
                        <Cancel className={classes.cancle}onClick={() => setOpen(false)}/>
                    </div>
                    <div className={classes.icons}>
                    <Search className={classes.searchBtn} onClick={() => setOpen(true)} />
                        <Badge className={classes.badge} color="secondary" badgeContent={4}>
                            <Mail />
                        </Badge>
                        <Badge className={classes.badge} color="secondary" badgeContent={1}>
                            <Notifications />
                        </Badge>
                        <Avatar src="https://unsplash.com/photos/face" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
