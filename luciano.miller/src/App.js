
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
    <div>
        <Select />
      <div className="App" >  
        <div className="page-content"> 
          { activities.length>0?
              activities.map(activity=>{
                return <Card  key={activity.id} props={activity} />
              })
              :"Cargando"
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
