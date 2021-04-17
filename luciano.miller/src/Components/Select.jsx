import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import {useDispatch, useSelector} from "react-redux"
import {setCurrency} from "../redux/actions/currencyActions"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {    
    minWidth: 200,
    background:"#c9dbf6"
  },
  navbar:{
    textAlign:"center",
    backgroundColor:"white",
    display: "flex",
    justifyContent:"space-around",
    padding:15,
    borderBottomLeftRadius:"15px",
    borderBottomRightRadius:"15px",
    marginBottom:10,
    alignItems:"baseline"
  } 
}))

function Selectt() {

  const {currency} =useSelector(state=>state.currency)
  const dispatch = useDispatch ()    
  const classes = useStyles();
  const handleChange=(e)=>{     
    dispatch(setCurrency(e.target.value))
  }
  return (
    <div className={classes.navbar}>
      <a href="https://www.denomades.com/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.2 40.6" style={{width:"80%"}}>
        <path fill="#039BE5" d="M28 40h-8.3v-3.7h-.1c-1.9 2.9-4.7 4.4-8.4 4.4-3.4 0-6.1-1.2-8.1-3.6C1 34.7 0 31.4 0 27.1c0-4.5 1.1-8 3.4-10.7s5.2-4 8.9-4c3.5 0 5.9 1.2 7.3 3.7h.1V0H28v40zm-8.1-13.2v-2c0-1.8-.5-3.2-1.5-4.4s-2.3-1.7-4-1.7c-1.8 0-3.3.7-4.3 2.2s-1.6 3.4-1.6 6c0 2.4.5 4.2 1.5 5.5s2.4 1.9 4.2 1.9c1.7 0 3.1-.7 4.1-2 1-1.4 1.6-3.2 1.6-5.5zm37.6 2H39.9c.3 3.9 2.8 5.9 7.4 5.9 3 0 5.6-.7 7.8-2.1v6c-2.5 1.3-5.7 2-9.7 2-4.4 0-7.7-1.2-10.2-3.6-2.4-2.4-3.6-5.8-3.6-10.1 0-4.5 1.3-8 3.9-10.7s5.8-3.9 9.6-3.9c3.9 0 7 1.2 9.1 3.5 2.2 2.3 3.2 5.5 3.2 9.5v3.5h.1zm-7.7-5.1c0-3.9-1.6-5.8-4.7-5.8-1.3 0-2.5.6-3.5 1.7s-1.6 2.5-1.8 4.1h10zM87.6 40h-8.3V25c0-4.2-1.5-6.3-4.5-6.3-1.4 0-2.6.6-3.6 1.7s-1.4 2.5-1.4 4.2V40h-8.3V13h8.3v4.3h.2c2-3.3 4.9-4.9 8.7-4.9 6 0 9 3.7 9 11.1V40h-.1zm78.2 0h-8.3V24.6c0-3.9-1.4-5.9-4.3-5.9-1.4 0-2.5.6-3.3 1.8s-1.3 2.6-1.3 4.4V40h-8.3V24.4c0-3.8-1.4-5.7-4.2-5.7-1.4 0-2.6.6-3.4 1.7s-1.3 2.7-1.3 4.6v15h-8.3V13h8.3v4.2h.1c.9-1.4 2.1-2.6 3.6-3.5 1.6-.9 3.3-1.4 5.1-1.4 3.8 0 6.4 1.7 7.8 5 2.1-3.4 5.1-5 9.1-5 5.9 0 8.8 3.6 8.8 10.9V40h-.1zm27.7 0h-7.9v-3.9h-.1c-1.8 3-4.5 4.5-8 4.5-2.6 0-4.7-.7-6.2-2.2s-2.3-3.5-2.3-5.9c0-5.2 3.1-8.3 9.3-9.1l7.3-1c0-3-1.6-4.4-4.8-4.4s-6.3 1-9.2 2.9v-6.3c1.2-.6 2.7-1.1 4.8-1.6 2-.5 3.8-.7 5.5-.7 7.7 0 11.5 3.8 11.5 11.5V40h.1zm-7.8-11v-1.8l-4.9.6c-2.7.4-4.1 1.6-4.1 3.7 0 .9.3 1.7 1 2.3.7.6 1.6.9 2.7.9 1.6 0 2.8-.5 3.8-1.6s1.5-2.4 1.5-4.1zm39.5 11h-8.3v-3.7h-.1c-1.9 2.9-4.7 4.4-8.4 4.4-3.4 0-6.1-1.2-8.1-3.6-2.1-2.4-3.1-5.7-3.1-10 0-4.5 1.1-8 3.4-10.7s5.2-4 8.9-4c3.5 0 5.9 1.2 7.3 3.7h.1V0h8.3v40zM217 26.8v-2c0-1.8-.5-3.2-1.5-4.4s-2.3-1.7-4-1.7c-1.8 0-3.3.7-4.3 2.2s-1.6 3.4-1.6 6c0 2.4.5 4.2 1.5 5.5s2.4 1.9 4.2 1.9c1.7 0 3.1-.7 4.1-2 1.1-1.4 1.6-3.2 1.6-5.5zm37 2h-17.6c.3 3.9 2.8 5.9 7.4 5.9 3 0 5.6-.7 7.8-2.1v6c-2.5 1.3-5.7 2-9.7 2-4.4 0-7.7-1.2-10.2-3.6-2.4-2.4-3.6-5.8-3.6-10.1 0-4.5 1.3-8 3.9-10.7s5.8-3.9 9.6-3.9c3.9 0 7 1.2 9.1 3.5 2.2 2.3 3.2 5.5 3.2 9.5v3.5h.1zm-7.7-5.1c0-3.9-1.6-5.8-4.7-5.8-1.3 0-2.5.6-3.5 1.7s-1.6 2.5-1.8 4.1h10zm10.6 15.6v-6.8c1.4.8 2.7 1.4 4.1 1.8s2.7.6 3.9.6c1.5 0 2.6-.2 3.5-.6.9-.4 1.3-1 1.3-1.8 0-.5-.2-1-.6-1.3s-.9-.7-1.5-.9c-.6-.3-1.3-.5-2-.7s-1.4-.4-2.1-.7c-1.1-.4-2-.8-2.8-1.3s-1.5-1-2.1-1.6-1-1.3-1.3-2.1c-.3-.8-.4-1.8-.4-2.9 0-1.5.3-2.8 1-3.9s1.5-2 2.6-2.7 2.4-1.2 3.8-1.5 2.9-.5 4.4-.5c1.2 0 2.4.1 3.6.3s2.4.5 3.6.8v6.4c-1.1-.6-2.2-1.1-3.4-1.4-1.2-.3-2.4-.5-3.5-.5-.5 0-1.1 0-1.5.1-.5.1-.9.2-1.3.4s-.7.4-.9.7-.3.6-.3 1c0 .5.2.9.5 1.3s.7.7 1.2.9c.5.3 1.1.5 1.7.7s1.2.4 1.9.6c1.1.4 2.1.8 3 1.3s1.7 1 2.3 1.6c.6.6 1.1 1.3 1.5 2.2.3.8.5 1.8.5 3 0 1.6-.3 3-1 4.1s-1.6 2.1-2.8 2.8c-1.2.7-2.5 1.2-4 1.6-1.5.3-3.1.5-4.7.5-2.9-.2-5.6-.6-8.2-1.5z"/>
        <path fill="#58595B" d="M284.3 40.2c-1.2 0-2.3-.4-3.1-1.1-.8-.8-1.2-1.7-1.2-2.8s.4-2.1 1.3-2.8c.8-.7 1.9-1.1 3.2-1.1 1.3 0 2.3.4 3.1 1.1.8.7 1.2 1.7 1.2 2.8 0 1.2-.4 2.1-1.2 2.8-.9.7-1.9 1.1-3.3 1.1zm27.3-1.2c-1.9 1.1-4.6 1.6-8.1 1.6-4.1 0-7.5-1.3-10.1-3.8s-3.8-5.8-3.8-9.7c0-4.6 1.4-8.2 4.1-10.9 2.8-2.6 6.4-4 11-4 3.2 0 5.5.4 6.9 1.3v7.1c-1.7-1.3-3.7-2-5.8-2-2.4 0-4.3.7-5.7 2.1-1.4 1.4-2.1 3.3-2.1 5.8 0 2.4.7 4.3 2 5.6 1.3 1.4 3.2 2 5.5 2 2.1 0 4.1-.6 6.1-2V39zm17.6 1.6c-4.5 0-8-1.3-10.6-3.8s-3.9-5.9-3.9-10.3c0-4.5 1.3-8 4-10.5s6.3-3.8 10.8-3.8 8 1.3 10.5 3.8 3.8 5.9 3.8 10c0 4.5-1.3 8-3.9 10.6-2.5 2.7-6.1 4-10.7 4zm.2-21.9c-2 0-3.5.7-4.6 2s-1.6 3.3-1.6 5.7c0 5.2 2.1 7.8 6.3 7.8 4 0 6-2.7 6-8 0-5-2-7.5-6.1-7.5zM390.2 40h-8.3V24.6c0-3.9-1.4-5.9-4.3-5.9-1.4 0-2.5.6-3.3 1.8s-1.3 2.6-1.3 4.4V40h-8.3V24.4c0-3.8-1.4-5.7-4.2-5.7-1.4 0-2.6.6-3.4 1.7s-1.3 2.7-1.3 4.6v15h-8.3V13h8.3v4.2h.1c.9-1.4 2.1-2.6 3.6-3.5 1.6-.9 3.3-1.4 5.1-1.4 3.8 0 6.4 1.7 7.8 5 2.1-3.4 5.1-5 9.1-5 5.9 0 8.8 3.6 8.8 10.9V40h-.1z"/>
        <path fill="#039BE5" d="M105.7 12c-2.5 0-4.9.7-7 1.8l.2.9 2.5.6 5 1 2.2 1.8h1.5l1.8 1.2v1.1l3.6 3.1-5.4 6.9-2.4-1.5 1.8 2.3-4.7 6.5 1.5 1.6-2.6-.3-2-2.4.9-10.9-3.1-1.4-1.2-4.7 2.8-3.8-.9-.2-.8.4-1.6-.3-.3-1c-3.6 2.6-6 6.8-6 11.6 0 7.9 6.4 14.2 14.2 14.2 7.9 0 14.2-6.4 14.2-14.2 0-7.9-6.4-14.3-14.2-14.3z"/>
      </svg>
      </a>
      <div style={{display:"flex",justifyContent:"flex-end", width:600}}>          
        
        <FormControl variant="standard" >
          <InputLabel style={{fontSize:19, fontWeight:"bold"}} >Selecciona tu moneda</InputLabel>
          <Select
            native
            value={currency}
            onChange={handleChange}    
            className={classes.formControl}      
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
    </div>
  )
}

export default Selectt
