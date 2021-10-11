import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {db,auth,database,newref,storage1} from './firebaseSeller';
import {set,push} from "firebase/database";

import './Card.css'

// import waveImg from "./wave.png";


const useStyles = makeStyles({
  root: {
    
    margin: 25,
    boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
    cursor:"pointer",
    display: 'flex',

    
  },
  media: {
    minHeight: "142px",
    minWidth:"100px"
  }
});



const getStars = ( starCount ) =>{
  let content=[];
  for( let index=0 ; index < starCount ; index++){
      content.push(<span class="fa fa-star checked"></span>);
  }
  
  for( let index=0 ; index < 5-starCount ; index++){
     content.push(<span class="fa fa-star"></span>)
  }
  return content;
}





export default function SellerProductCard( props ) {
  const classes = useStyles();
  const deleteProduct=() => {
  set(newref(database, 'products/'+props.productId),{
    null:null,
  });
  props.fetchChanges();
  
  
  }


  return (
    
    <Card className={classes.root} >
          <CardMedia
            className={classes.media}
            image={props.image}

          />
          
          <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
                
                {props.name }
            </Typography>

                
              <Typography gutterBottom variant="h5" component="h3">
                <i class="fa fa-rupee" style={{fontSize:24}}></i>
                  {props.price }
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
                      { props.description }
                  </Typography>
              <Button style={{backgroundColor:"orange"}} variant="contained" onClick={deleteProduct}>
                Double Click To Remove From Amazon
          </Button>
              {getStars(parseFloat( props.stars))}
          </CardContent>

    </Card>
   
  );
}
