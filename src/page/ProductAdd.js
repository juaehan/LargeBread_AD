import React, { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import regexHelper from '../libs/RegexHelper';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../slices/AdminProductSlice';

const AddContainer = styled.div`
    &.wrap{padding: 30px 300px;}
    label{
        margin-right: 25px;
        font-size: 15px;
    }
    .productInput{width: 100%;}
    td{text-align : left; padding-right: 12px;}
    button{
        padding: 10px 30px;
        margin-top: 20px;
        margin-bottom: 230px;
        cursor: pointer;
        background: #fec24a;
        border:none;
        &:hover{
            background: #ae2a2f;
            color: #fff;
        }
    }
`;
const ProductAdd = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading, error} = useSelector((state) => state.AdminProductSlice);

    const onSubmit = React.useCallback(e => {
        e.preventDefault();

        const current = e.target;

        try{
            regexHelper.check(current.category_id, '카테고리를 선택해주세요.');
            regexHelper.check(current.product_state, '상품상태를 선택해주세요.');
            regexHelper.value(current.product_name, '상품명을 입력해주세요.');
            regexHelper.value(current.price, '가격을 입력해주세요.');
            regexHelper.value(current.cost, '원가를 입력해주세요.');
            regexHelper.value(current.img_url, '이미지를 선택해주세요.');
        }catch(e){
            window.alert(e.message);
            e.field.focus();
            return;
        }
        dispatch(addProduct({
            product_name: current.product_name.value,
            price: current.price.value,
            img_url: current.img_url.files[0],
            product_state: current.product_state.value,
            cost: current.cost.value,
            category_id: current.category_id.value
        })).then(() => {
            navigate("/admin/product");
            window.location.reload();
        });
        
    }, [dispatch, navigate]);
    

    return (
        <AddContainer className='wrap'>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ):(
                <form onSubmit={onSubmit} encType="multipart/form-data">
                    <Table>
                        <colgroup>
                            <col width="250"></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>카테고리</th>
                                <td>
                                    <label style={{marginRight: "20px"}}><input type="radio" name="category_id" value="1"/>케이크</label>
                                    <label><input type="radio" name="category_id" value="2"/>마카롱</label>
                                    <label><input type="radio" name="category_id" value="3"/>빵</label>
                                    <label><input type="radio" name="category_id" value="4"/>쿠키</label>
                                    <label><input type="radio" name="category_id" value="5"/>샌드위치</label>
                                    <label><input type="radio" name="category_id" value="6"/>크로플</label>
                                    <label><input type="radio" name="category_id" value="7"/>기타</label>
                                </td>
                            </tr>
                            <tr>
                                <th>상품상태</th>
                                <td>
                                    <label><input type="radio" name="product_state" value="Y"/>판매중</label>
                                    <label><input type="radio" name="product_state" value="N"/>품절</label>
                                </td>
                            </tr>
                            <tr>
                                <th>상품명</th>
                                <td>
                                    <input type="text" name="product_name" placeholder='상품명을 입력해주세요.' className="productInput" />
                                </td>
                            </tr>
                            <tr>
                                <th>판매가격</th>
                                <td><input type="text" name="price" placeholder='가격을 입력해주세요.' className="productInput"/></td>
                            </tr>
                            <tr>
                                <th>원가</th>
                                <td><input type="text" name="cost" placeholder='원가를 입력해주세요.' className="productInput"/></td>
                            </tr>
                            <tr>
                                <th>이미지</th>
                                <td>
                                    <input type="file" name="img_url" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                        <button type='submit'>저장하기</button>
                    </div>
                </form>
            )}
        </AddContainer>
    );
});

export default ProductAdd;