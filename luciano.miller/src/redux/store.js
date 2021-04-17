import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import activitesReducer from "./reducers/activities"
import currencyReducer from "./reducers/curreny"

const reducer = combineReducers({
    activities: activitesReducer,
    currency:currencyReducer
})

const middleware=[thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store