import { SET_CURRENCY } from "../constants/currency";

export const setCurrency = (curren) => (dispatch) => {      

    dispatch({ type: SET_CURRENCY, payload: curren });    
      
  };