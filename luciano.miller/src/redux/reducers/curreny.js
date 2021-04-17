import { SET_CURRENCY } from "../constants/currency";

const initialState = {
    currency: "CLP"    
  };

function currencyReducer(state = initialState, action) {
    switch (action.type) {      
        
        case SET_CURRENCY:
        return {
            ...state,
            currency: action.payload,            
        };

        default:
        return state;
    }
}

export default currencyReducer;