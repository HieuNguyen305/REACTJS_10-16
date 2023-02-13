import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_FAIL } from "./types";
import api from "../../../../utils/apiUtil";

export const actFetchData = () => {
    return (dispatch) => {
        //request
        dispatch(actListMovieRequest());
        // axios({
        //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET",
        //     headers: {
        //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c"
        //     }
        // })
        api
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                // success request 
                dispatch(actListMovieSuccess(result.data.content));
            })
            .catch((error) => {
                // fail 
                dispatch(actListMovieFail(error));
            })
    }
}


export const actListMovieRequest = () => {
    return {
        type: LIST_MOVIE_REQUEST,
    }
};

export const actListMovieSuccess = (data) => {
    return {
        type: LIST_MOVIE_SUCCESS,
        payload: data,
    }
};

export const actListMovieFail = (error) => {
    return {
        type: LIST_MOVIE_FAIL,
        payload: error,
    }
};