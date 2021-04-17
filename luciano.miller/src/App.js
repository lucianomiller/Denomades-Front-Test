
import './App.css';
import Card from "./Components/Card"
import Select from "./Components/Select"
import React, {useEffect}  from 'react';
import {fetchActivities} from "./redux/actions/activitiesActions"
import {useSelector, useDispatch } from "react-redux"

function App() {
  const dispatch=useDispatch()

  const {activities}= useSelector(state=>state.activities)  

  useEffect(() => {    
    dispatch(fetchActivities())
  }, [])

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="App" style={{display:"flex",flexDirection:"column", justifyContent: "center", margin:30}} >  
        <Select />
        <div>
          { activities.length>0?
              activities.map(activity=>{
                return <Card  key={activity.id} props={activity} />
              }):  "Cargando" } 
        </div>
      </div>
    </div>
  );
}

export default App;
