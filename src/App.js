import React from "react";
import { Leftbar } from "./Components/Leftbar";
import { Rightbar } from "./Components/Rightbar";
import { Feed } from "./Components/Feed";
import Navbar from "./Components/Navbar/Navbar";
import { Grid ,makeStyles} from "@material-ui/core";
const useStyles= makeStyles((theme)=>({
  app: {
    display:'flex',
    flexDirection:'column',
  },
  right:{
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
}));
function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      
        <Navbar />
        <Grid container>

          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>

        <Grid item sm={7} xs={10}>
            <Feed />
          </Grid>

          <Grid item sm={3} className={classes.right}>           
            <Rightbar />
          </Grid>

        </Grid>
  
    </div>
  );
}

export default App;
