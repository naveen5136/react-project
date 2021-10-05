import { combineReducers } from "redux";
import NaveenReducer from "./reducer/NaveenReducer";
import BhotuReducer from "./reducer/BhotuReducer";


const rootReducer = combineReducers({
    NaveenReducerData:NaveenReducer,
    BhotuReducerData:BhotuReducer
})
export default rootReducer;