import React, { memo } from 'react';
import Table from '../components/Table';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import { useSelector, useDispatch } from 'react-redux';
import { getProductList, deleteProduct } from '../slices/AdminProductSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function setCategory(category){
    switch (category){
        case 'CA':
            return '케이크';
        case 'M':
            return '마카롱';
        case 'B':
            return '빵';
        case 'CK':
            return '쿠키';
        case 'S':
            return '샌드위치';
        case 'CR':
            return '크로플';
        case 'E':
            return '기타';
        default:
            return;                       
    }
}

function setState(state){
    switch (state){
        case 'Y':
            return '판매중';
        case 'N':
            return '품절';
        default:
            return;                       
    }
}
const ProductContainer = styled.div`
    a{
        display: inline-block;
        padding: 10px 15px;
        background: #ae2a2f;
        margin-bottom: 25px;
        border-radius: 4px;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        font-size: 16px;
        &:hover{background: #fec24a}
    }
    .state{
        padding: 3px;
        color: #fff;
        border-radius: 5px;
        font-size: 10px;
        margin-left: 20px;
        background: #006d00;
    }
    .no{background: #ff0000;}
    button{
        border: none;
        padding: 3px 8px;
        border-radius: 5px;
        cursor: pointer;
    }
    .edit{
        background: #fec24a; 
        margin-right: 15px;
    }
    .del{
        background: #ae2a2f;
        color: #fff;
    }
    
`;
const Product = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.AdminProductSlice);

    React.useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);


    const onEditClick = React.useCallback(e => {
        e.preventDefault();

        const current = e.target;
        const id = current.dataset.id;

        navigate(`/admin/product/product_edit/${id}`);
    }, [navigate]);

    const onDeleteClick = React.useCallback(e => {
        e.preventDefault();

        const current = e.target;

        if(window.confirm(`정말 ${current.dataset.product_name}를(을) 삭제하시겠습니까?`)){
            dispatch(deleteProduct({
                id: current.dataset.id
            }));
        }
    }, [dispatch]);
    return (
        <ProductContainer>
                <Spinner visible={loading} />
                <NavLink to="product_add">상품추가</NavLink>
                {error ? (
                    <ErrorView error={error} />
                ) : data && (
                    <Table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>카테고리</th>
                                <th>상품명</th>
                                <th>가격</th>
                                <th>원가</th>
                                <th>상품 관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.item.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td><span>{setCategory(v.category_name)}</span></td>
                                        <td>{v.product_name}<span className={"state " + (v.product_state==='N' ? 'no' : '')}>{setState(v.product_state)}</span></td>
                                        <td>{v.price.toLocaleString()}원</td>
                                        <td>{v.cost.toLocaleString()}원</td>
                                        <td>
                                            <button type="button" className="edit" data-id={v.id} onClick={onEditClick}>
                                                수정
                                            </button>
                                            <button type="button" className="del" data-id={v.id} data-product_name={v.product_name} onClick={onDeleteClick}>
                                                삭제
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                )}
        </ProductContainer>
    );
});

export default Product;