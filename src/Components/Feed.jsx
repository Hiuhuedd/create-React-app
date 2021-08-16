import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import { Post } from './Post';

const useStyles = makeStyles((theme) =>
({
    container: {
        paddingTop: theme.spacing(10),
    },

}
));
export const Feed = () => {
    const classes = useStyles()
    return (
        <div>
            <Container className={classes.container}>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>

            </Container>
        </div>
    )
}



