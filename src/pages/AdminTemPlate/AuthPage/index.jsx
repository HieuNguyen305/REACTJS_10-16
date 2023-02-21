import React, { useState } from 'react'
import { actAuthLogin } from './duck/actions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from "./../../../components/Loader/Loader";
import { useNavigate, Navigate } from "react-router-dom";

function AuthPage() {
    const dispatch = useDispatch();
    const props = useSelector((state) => state.authLoginReducer);
    const navigate = useNavigate();
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
    });

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value,
        });
    };
    console.log(state);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actAuthLogin(state, navigate));
    }

    const renderNoti = () => {
        const { error } = props;
        return (error &&
            (<div className='alert alert-danger'>{error.response.data.content}</div>
            )
        );
    };

    if (localStorage.getItem("UserAdmin")) return <Navigate replace to="/admin/dashboard" />;
    if (props.loading) return <Loader />;

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tài Khoản</label>
                            <input type="text" className="form-control" name='taiKhoan' onChange={handleOnChange} />
                        </div>
                        <div className="form-group">
                            <label>Mật Khẩu</label>
                            <input type="password" className="form-control" name='matKhau' onChange={handleOnChange} />
                        </div>
                        {renderNoti()}
                        <button type='submit' className='btn btn-success'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;