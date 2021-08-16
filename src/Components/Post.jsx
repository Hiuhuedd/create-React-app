import React from 'react'
import {Typography, makeStyles, Card, CardActions, CardMedia, CardContent, Button } from '@material-ui/core'
import image from '../library/style.jpeg'
const useStyles = makeStyles((theme) =>
({
  card: {
        marginTop: theme.spacing(2),
        display: 'inline-block',
    },
  
    media:{
        height: 350,
         top:'0',
        [theme.breakpoints.down("sm")]: {
          height:150,
        },
    },

}
));
export const Post = () => {
    const classes = useStyles()
    return (
        <Card >
            <CardActions className={classes.card}>
                <CardMedia className={classes.media}>
                <img
                    src={image}
                    alt="commerce.js"
                    width='100%'
                    
                    className={classes.image}/> 
                    </CardMedia>
                <CardContent>
                    <Typography> my first post</Typography>
                    <Typography> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quidem perferendis vero magnam ea possimus. Aspernatur inventore aut incidunt, nobis, sit excepturi beatae officiis qui quibusdam harum minus, ab ipsam?</Typography>
                    </CardContent>    
                <Button color='primary'  >share </Button>
                <Button color='primary'>learn more </Button>
            </CardActions>
        </Card>
    )
}