import { combineReducers } from "redux"
import listMovieReducer from "../pages/HomeTemPlate/ListMoviePages/duck/reducer";
import detailMovieReducer from "../pages/HomeTemPlate/DetailMoviePage/duck/reducer";
import authLoginReducer from "../pages/AdminTemPlate/AuthPage/duck/reducer";
import addUserReducer from "../pages/AdminTemPlate/AddUserPage/duck/reducer";
const rootReducer = combineReducers({ listMovieReducer, detailMovieReducer, authLoginReducer, addUserReducer, });

export default rootReducer;