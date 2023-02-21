import * as ActionTypes from "./types";
// import api from "./../../../../utils/apiUtil";
import api from "utils/apiUtil"

export const addUserApi = (user) => {
    return (dispatch) => {
        dispatch(addUserRequest());
        api.post("QuanLyNguoiDung/ThemNguoiDung", user)
            .then((result) => {
                dispatch(addUserSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(addUserFail(error));
            })
    };
};

const addUserRequest = () => {
    return {
        type: ActionTypes.ADD_USER_REQUEST,
    }
};

const addUserSuccess = (data) => {
    return {
        type: ActionTypes.ADD_USER_REQUEST,
        payload: data,
    }
};

const addUserFail = (error) => {
    return {
        type: ActionTypes.ADD_USER_REQUEST,
        payload: error,
    }
};