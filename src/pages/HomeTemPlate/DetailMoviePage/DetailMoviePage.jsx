import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { fetchDetailMovie } from './duck/actions';
import { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../components/Loader/Loader"
export default function DetailMoviePage() {
    const loading = useSelector((state) => state.detailMovieReducer.loading);
    const data = useSelector((state) => state.detailMovieReducer.data);
    const dispatch = useDispatch();

    const params = useParams();
    console.log(params.id);

    useEffect(() => {
        dispatch(fetchDetailMovie(params.id))
    }, [])

    if (loading) return <Loader />

    return (
        <div>
            <h3>{data && data.tenPhim}</h3>
        </div>
    )
}



// const mapStateToProps = (state) => {
//     return {
//         loading: state.detailMovieReducer.loading,
//         data: state.detailMovieReducer.data,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchDetailMovie: (id) => {
//             dispatch(fetchDetailMovie(id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (DetailMoviePage);