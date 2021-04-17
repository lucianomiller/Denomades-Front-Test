import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

import {useSelector } from "react-redux"
import axios from "axios"

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    minWidth:250,    
    margin:20,
    minHeight:700
  },
  media: {
    height: 450,    
  }  
});

export default function MediaCard({props }) {
  const classes = useStyles(); 
  
  const {currency} =useSelector(state=>state.currency)

  const [currencies, setCurrencies]=useState()
    useEffect(()=>{      
      axios.get("https://denomadesapi.herokuapp.com/currencies")
      .then((resp)=>{  setCurrencies(resp.data)})
    },[])

  return (
    <Card className={classes.root} elevation={10}>
      <CardHeader title={
          <Typography  variant="h4"  style={{fontWeight:"bold"}} >
            {props.name}
          </Typography>} />
      <CardActionArea >
        <CardMedia 
          className={classes.media}
          image={props.imageUrl}          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" >
            {props.city}
          </Typography>
          <Typography variant="body2"  >
            {props.description}
          </Typography>          
          <div style={{display:'flex', justifyContent:'center', alignItems:"baseline", marginTop:"10px"}}>
            <Typography  variant="h5" style={{fontWeight:"bold"}}>
              {currency }
            </Typography>
             <pre> </pre>
            <Typography  variant="h4">
              {currencies && (props.price * currencies[props.currency+currency]).toFixed(2) }
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>    
    </Card>
  );
}