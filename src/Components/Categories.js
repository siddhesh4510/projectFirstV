import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import {useHistory } from 'react-router-dom';
import './Box.css'


const useStyles = makeStyles({
    root: {
      maxWidth: 430,
      margin: 20,
      boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
      cursor:"pointer"
      
    },
    media: {
      height: "342px"
    }
  });

export default function CategoryCard(props) {
  const history=useHistory();
    const classes = useStyles();
    const dispatch=useDispatch();
    var clickOnKids=()=>{
      console.log("clickOnKids");
      dispatch({type:'Kids'});
      props.clickFunction();

      // history.push('/products');
      // props.history.push('/products');

      
    }
    const clickOnElectronics=()=>{
      console.log("clickOnElectronics");
      dispatch({type:'Electronics'});
    }
    const clickOnFashion=()=>{
      console.log("clickOnFashion");
      dispatch({type:'Fashion'});
    }

    const clickOnCard=()=>{
      if(props.name=="Kids"){
        dispatch({type:'Kids'});
      }
      if(props.name=="Fashion"){

        dispatch({type:'Fashion'});
      }
      if(props.name=="Electronics"){
        dispatch({type:'Electronics'});
      }
      props.clickFunction();

    }


    return (
    <Card className={classes.root} >
         <Typography gutterBottom variant="h4" component="h3">
         {props.name}
        </Typography >
          <CardMedia
            className={classes.media}
            image={props.image}
            onClick={clickOnCard}
          />
          
          <CardContent>
              <a href="#">
                  <Typography variant="body2" color="textSecondary" component="p">
                       
                  </Typography>
                </a>

          </CardContent>

    </Card>
    )
}