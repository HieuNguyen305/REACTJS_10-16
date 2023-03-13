import React, { Component } from 'react';
// import NhanVien from './NhanVien';
import SanPham from './SanPham';
import WithCard from './WithCard';

const WrapperCard = WithCard(SanPham)

export default class HomePages extends Component {
    render() {
        return (
            <div>
                <button className='btn btn-primary'>Test</button>
                <button className="btn-bg-red">Test</button>
                <WrapperCard />
                {/* <NhanVien /> */}
            </div>
        )
    }
}
