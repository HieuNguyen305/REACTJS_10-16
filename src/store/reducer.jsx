import { combineReducers } from "redux"
import listMovieReducer from "../pages/HomeTemPlate/ListMoviePages/duck/reducer";
const rootReducer = combineReducers({ listMovieReducer });

export default rootReducer;