import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Card.css'

// import waveImg from "./wave.png";


const useStyles = makeStyles({
  root: {
    maxWidth: 230,
    margin: 25,
    boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
    cursor:"pointer"
  },
  media: {
    height: "342px"
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



export default function ProductCard( props ) {
  const classes = useStyles();


  return (
    
    <Card className={classes.root} >
          <CardMedia
            className={classes.media}
            image={props.image}
          />
          
          <CardContent>
              <a href="#">
                  <Typography variant="body2" color="textSecondary" component="p">
                      { props.name }
                  </Typography>
                </a>
              <Typography gutterBottom variant="h5" component="h3">
                <i class="fa fa-rupee" style={{fontSize:24}}></i>
                  {props.price }
              </Typography>
          </CardContent>
        {getStars(parseFloat( props.stars))}
    </Card>
   
  );
}
