import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie/Movie';
import Loader from 'components/Loader/Loader';
import { actFetchData } from "./duck/action"
import { connect } from 'react-redux';
class ListMoviePages extends Component {
    componentDidMount() {
        // request data from server
        this.props.fetchData();
    }


    renderListMovie = () => {
        const { data, loading } = this.props;
        if (loading) return <div><Loader /></div>;

        return data?.map((movie) => {
            return <Movie key={movie.maPhim} movie={movie} />
        })
        // ? : optional channing
    }

    render() {
        return (
            <div className="container">
                ListMoviePages
                <div className="row">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(actFetchData())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePages);
