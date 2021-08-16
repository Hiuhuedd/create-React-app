import React from 'react'
import { Container, Typography, makeStyles} from '@material-ui/core'
import { BookmarkSharp, BusinessCenter, List, CameraAlt, ExitToApp, Home, Person, PlayCircleFilled, Settings, TabletMac } from '@material-ui/icons'
const useStyles= makeStyles((theme)=>
({ 
container:{
    height:'100vh',
    position:'sticky',
    top:'0',
paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main, 
        [theme.breakpoints.up("sm")]: {
          color:'#555',
            backgroundColor:'white',
            border:'solid 1px #ece7e7'
        },
},
item:{
display:'flex',
alignItems:'center',
justifyContent:'center',
color:'white',
marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
        cursor:'pointer',
        color: '#555', 
        justifyContent: 'start',

    },
 },
 name:{
     marginLeft:'5px',
     [theme.breakpoints.down("sm")]: {
         margin: theme.spacing(3),
        display:'none',
     },
 }
}));
export const Leftbar = () => {
    const classes= useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.name}>
                    Homepage
                </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.name}>
                    Profile
                </Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.name}>
                    List
                </Typography>
            </div>
            <div className={classes.item}>
                <CameraAlt className={classes.icon} />
                <Typography className={classes.name}>
                    Camera
                </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleFilled className={classes.icon} />
                <Typography className={classes.name}>
                    Video
                </Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.name}>
                    Products
                </Typography>
            </div>
            <div className={classes.item}>
                <BookmarkSharp className={classes.icon} />
                <Typography className={classes.name}>
                    Saved
                </Typography>
            </div>
            <div className={classes.item}>
                <BusinessCenter className={classes.icon} />
                <Typography className={classes.name}>
                    Business
                </Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.name}>
                    Settings
                </Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.name}>
                    Logout
                </Typography>
            </div>
           
            
        </Container>
    )
}
