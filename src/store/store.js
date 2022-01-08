import { createStore , compose , applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const configureStore = () =>{
    
    const middlewares = [thunk];
    const composeEnhacers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers=composeEnhacers(applyMiddleware(...middlewares));
    const store=createStore(rootReducer(),enhancers)
  
    return store;
}