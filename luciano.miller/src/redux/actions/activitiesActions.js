import axios from "axios"
import {    
  FETCHED_ACTIVITIES,
  FETCHING_ACTIVITIES,
  FETCHING_ACTIVITIES_ERROR,  
} from "../constants/activities";

export const fetchActivities = () => (dispatch) => {
    dispatch({ type: FETCHING_ACTIVITIES });
  
    axios.get("https://denomadesapi.herokuapp.com/activities")
      .then((resp) => {
        dispatch({ type: FETCHED_ACTIVITIES, payload: resp.data });
      })
      .catch((e) => {
        dispatch({ type: FETCHING_ACTIVITIES_ERROR, payload: e });
      });
  };
  