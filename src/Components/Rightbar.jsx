import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) =>
({
    container: {
        paddingTop: theme.spacing(10),
    },

}
));
export const Rightbar = () => {
    const classes= useStyles()
    return (
        <div>
            <Container className={classes.container}>
<h2>right</h2>
            </Container>
            
        </div>
    )
}

