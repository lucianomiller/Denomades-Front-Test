import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    minWidth:300,
    margin:30
  },
  media: {
    height: 400,
  },
});

export default function MediaCard({props, currency,currencies}) {
  const classes = useStyles();
  console.log(props)
  console.log(currency)

  return (
    <Card className={classes.root} elevation={5}>
        <CardHeader title={<Typography  variant="h4" component="h2" style={{fontWeight:"bold"}} >{props.name} </Typography>} />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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
            <Typography  variant="h4" component="h2">
              {currencies && (props.price * currencies[props.currency+currency]).toFixed(2) }
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}