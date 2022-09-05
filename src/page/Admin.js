import React, { memo } from 'react';
import {Routes, Route} from 'react-router-dom';
import MenuLink from '../components/MenuLink';
import styled from 'styled-components';
import Product from '../page/Product';
import OrderList from '../page/OrderList';
import AdminLoading from './AdminLoading';
import ProductAdd from './ProductAdd';
import ProductEdit from './ProductEdit';

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
    div{padding: 10px; background-color: #f5f5f5;}
`;

const Admin = memo(() => {
    return (
        <AdminContainer>
            <h1>Large Bread 관리자</h1>
            <nav>
                <MenuLink to='/admin/product'>상품관리</MenuLink>
                <MenuLink to='/admin/order_list'>주문내역</MenuLink>
            </nav>
            <div>
                <Routes>
                    <Route path='/' element={<AdminLoading />} />
                    <Route path='/admin/product' element={<Product />} />
                    <Route path='/admin/order_list' element={<OrderList />} />
                    <Route path='/admin/product/product_add' element={<ProductAdd />} />
                    <Route path='/admin/product/product_edit/:id' element={<ProductEdit />} />
                </Routes>
            </div>
        </AdminContainer>
    );
});

export default Admin;