import {
    
    FETCHED_ACTIVITIES,
    FETCHING_ACTIVITIES,
    FETCHING_ACTIVITIES_ERROR,
    
  } from "../constants/activities";

const initialState = {
    activities: [],    
    isFetchingActivities: false,
    isFetchingActivitiesError: null,
    
  };

function activitiesReducer(state = initialState, action) {
    switch (action.type) {       
        case FETCHING_ACTIVITIES:
        return {
            ...state,
            isFetchingActivities: true,
            isFetchingActivitiesError: null
        };
        case FETCHED_ACTIVITIES:
        return {
            ...state,
            activities: action.payload,
            isFetchingActivities: false,
            isFetchingActivitiesError: null
        };
        case FETCHING_ACTIVITIES_ERROR:
        return {
            ...state,
            isFetchingActivities: false,
            isFetchingActivitiesError: action.payload
        };

        default:
        return state;
    }
}

export default activitiesReducer;