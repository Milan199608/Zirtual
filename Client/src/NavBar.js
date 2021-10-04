import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import green from "@material-ui/core/colors/green";
import { Button } from "@material-ui/core";
import "./NavBar.css"


const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

const NavBar = () => {
  const classes = useStyles();
 
 
  

  return (
    <div>
      <AppBar 
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
         
          <IconButton  color="inherit">
            Who We Are
          </IconButton>
          <IconButton color="inherit" >
            Who We Serve
          </IconButton>
          <IconButton color="inherit" >
            What We Do
          </IconButton>
          <IconButton color="inherit" >
            FAQs
          </IconButton>
          <IconButton color="inherit" >
          Pricing
          </IconButton>
          <IconButton
            color="inherit" 
          >
            1546465435131
          </IconButton>
          <IconButton
            color="inherit" 
          >
            Login
          </IconButton>
          <Button
            color="inherit" 
          >
          Request a Consultation
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      


    </div>
  )
}

export default NavBar
