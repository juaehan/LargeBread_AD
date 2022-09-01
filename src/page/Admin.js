import React, { memo } from 'react';
import {Routes, Route} from 'react-router-dom';
import MenuLink from '../components/MenuLink';
import styled from 'styled-components';
import Product from '../page/Product';
import OrderList from '../page/OrderList';
import AdminLoading from './AdminLoading';

const AdminContainer = styled.div`
    height: 100%;
    width: 100%;
    h1{
        font-size: 40px;
        padding: 8px 8px;
        margin-bottom: 15px;
        font-weight: 600;
        color: #fec24a;
        height: 40px;
    }
    nav{height: 60px;}
    div{padding: 10px; background-color: #dfdfdf;}
`;

const Admin = memo(() => {
    return (
        <AdminContainer>
            <h1>Large Bread 관리자</h1>
            <nav>
                <MenuLink to='/product'>상품관리</MenuLink>
                <MenuLink to='/order_list'>주문내역</MenuLink>
            </nav>
            <div>
                <Routes>
                    <Route path='/' element={<AdminLoading />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/order_list' element={<OrderList />} />
                </Routes>
            </div>
        </AdminContainer>
    );
});

export default Admin;