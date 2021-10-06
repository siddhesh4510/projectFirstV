import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import './AppBar.css';
import { useDispatch } from "react-redux";


export default function CategoryBar(){
  const dispatch=useDispatch();
const clickOnKids=()=>{
  console.log("clickOnKids");
  dispatch({type:'Kids'});
}
const clickOnElectronics=()=>{
  console.log("clickOnElectronics");
  dispatch({type:'Electronics'});
}
const clickOnFashion=()=>{
  console.log("clickOnFashion");
  dispatch({type:'Fashion'});
}
    return (
        <div class="header">
         <AppBar style={{backgroundColor:"#232f3e",position:"absolute"}}>
            <Toolbar>
            <IconButton color="inherit" onClick={clickOnElectronics}>
            Electronics
          </IconButton>
          <IconButton color="inherit" onClick={clickOnKids} >
            Kids
          </IconButton>
          <IconButton color="inherit" onClick={clickOnFashion}>
            Fashion
          </IconButton>

            </Toolbar>
        </AppBar>
        </div>

    )
}