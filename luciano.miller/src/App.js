
import './App.css';
import Card from "./Components/Card"
import React, { useState, useEffect } from 'react';
import axios from "axios"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import CheckIcon from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography';





function App() {
  const [activities, setActivities]=useState()
  const [currencies, setCurrencies]=useState()
  const [currency, setCurrency]=useState("CLP")
  useEffect(()=>{
    axios.get("https://denomadesapi.herokuapp.com/activities")
    .then((resp)=>{  setActivities(resp.data)})
  },[])
  useEffect(()=>{
    axios.get("https://denomadesapi.herokuapp.com/currencies")
    .then((resp)=>{  setCurrencies(resp.data)})
  },[])
  console.log(currencies)
  console.log(activities)
  const handleChange=(e)=>{
    console.log (e.target.value)
    setCurrency(e.target.value)
  }
  return (
    <div className="App" style={{display:"grid", justifyContent: "center",/* width:"90%" */margin:"20px"}} >  
    <Typography gutterBottom variant="h6" component="h2" style={{textAlign:"start"}}>
            Selecciona moneda
          </Typography>

      <FormControl style={{ width: 200 }}>
            <NativeSelect defaultValue="CLP" onChange={handleChange} IconComponent={CheckIcon}>
              <option value={"CLP"}>Pesos chilenos</option>
              <option value={"USD"}>Dólar americano</option>
              <option value={"EUR"}>Euros</option>
              <option value={"BRL"}>Real brasileño</option>
              <option value={"ARS"}>Pesos argentinos</option>
              <option value={"COP"}>Pesos colombianos</option>
              <option value={"PEN"}>Sol peruano</option>
            </NativeSelect>
          </FormControl>

      {activities && activities.map(activity=>{
       return <Card  key={activity.id} props={activity} currency={currency} currencies={currencies}/>
      })


      } 
    </div>
  );
}

export default App;
