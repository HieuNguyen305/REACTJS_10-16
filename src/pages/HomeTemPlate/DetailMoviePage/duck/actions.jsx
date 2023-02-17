import * as ActionType from "./types"
import api from "./../../../../utils/apiUtil";

export const fetchDetailMovie = (id) => {
    return (dispatch) => {
        dispatch(actDetailMovieRequest());

        api.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                dispatch(actDetailMovieSuccess(result.data.content));
            })
            .catch((error) => {
                dispatch(actDetailMovieFail(error));
            })
    };
}

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    };
};
const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
};
const actDetailMovieFail = (error) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAIL,
        payload: error,
    };
};
