import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux"
import {setCurrency} from "../redux/actions/currencyActions"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    
    minWidth: 120,
    background:"white"
  }}))

function Selectt() {

    const {currency} =useSelector(state=>state.currency)
    const dispatch = useDispatch ()    
    const classes = useStyles();
    const handleChange=(e)=>{     
     dispatch(setCurrency(e.target.value))
    }
    return (
        <div style={{textAlign:"start", marginLeft:"30px"}}>
          <Typography gutterBottom variant="h6"  >
            Selecciona moneda
          </Typography>
          
          <FormControl variant="filled" className={classes.formControl} >
            <InputLabel htmlFor="filled-age-native-simple">Moneda</InputLabel>
            <Select
              native
              value={currency}
              onChange={handleChange}          
            >
              <option value={"CLP"}>Pesos chilenos</option>
              <option value={"USD"}>Dólar americano</option>
              <option value={"EUR"}>Euros</option>
              <option value={"BRL"}>Real brasileño</option>
              <option value={"ARS"}>Pesos argentinos</option>
              <option value={"COP"}>Pesos colombianos</option>
              <option value={"PEN"}>Sol peruano</option>
            </Select>
          </FormControl>
        </div>
    )
}

export default Selectt
