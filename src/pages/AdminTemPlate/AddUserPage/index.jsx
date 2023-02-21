import React, { useState } from 'react';
import { addUserApi } from './duck/actions';
import { useDispatch } from "react-redux"

function AddUserPage() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP18",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUserApi(state));
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <h3>Add User</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input type="text" className="form-control" name='taiKhoan' onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input type="password" className="form-control" name='matKhau' onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name='email' onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>So ĐT</label>
              <input type="text" className="form-control" name='soDt' onChange={handleOnChange} />
            </div>
            <div className="form-group">
              <label>Họ & Tên</label>
              <input type="text" className="form-control" name='hoTen' onChange={handleOnChange} />
            </div>
            <hr />
            <button type='submit' className='btn btn-success'>
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUserPage;
