import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import regexHelper from '../libs/RegexHelper';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { putProduct } from '../slices/AdminProductSlice';

const EditContainer = styled.div`
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
        margin-bottom: 267px;
        cursor: pointer;
        background: #fec24a;
        border:none;
        &:hover{
            background: #ae2a2f;
            color: #fff;
        }
    }
`;
const ProductEdit = memo(() => {
    const {id} = useParams();
    const navigate = useNavigate();
console.log(id);
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.AdminProductSlice);
    const [origin, setOrigin] = React.useState({
        product_name: '',
        price: '',
        cost: ''
    });
    console.log(data);
    React.useEffect(() => {
        const index = data.data.item.findIndex(e => e.id === parseInt(id));
        
        setOrigin({
            product_name: data.data.item[index].product_name,
            price: data.data.item[index].price,
            cost: data.data.item[index].cost
        });
    }, [dispatch, data, id]);

    const onSubmit = React.useCallback(e => {
        e.preventDefault();
        
        const current = e.target;

        dispatch(putProduct({
            id: id,
            category_id : current.category_id.value,
            product_state : current.product_state.value,
            product_name : current.product_name.value,
            price : current.price.value,
            cost : current.cost.value
        })).then(() => {
            navigate("/admin/product");
            window.location.reload();
        });
    }, [dispatch, id, navigate]);
    return (
        <EditContainer className='wrap'>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onSubmit}>
                    <Table>
                        <colgroup>
                            <col width="120"></col>
                        </colgroup>
                        <tbody>
                        <tr>
                                <th>????????????</th>
                                <td>
                                    <label><input type="radio" name="category_id" value="1"/>?????????</label>
                                    <label><input type="radio" name="category_id" value="2"/>?????????</label>
                                    <label><input type="radio" name="category_id" value="3"/>???</label>
                                    <label><input type="radio" name="category_id" value="4"/>??????</label>
                                    <label><input type="radio" name="category_id" value="5"/>????????????</label>
                                    <label><input type="radio" name="category_id" value="6"/>?????????</label>
                                    <label><input type="radio" name="category_id" value="7"/>??????</label>
                                </td>
                            </tr>
                            <tr>
                                <th>????????????</th>
                                <td>
                                    <label><input type="radio" name="product_state" value="Y"/>?????????</label>
                                    <label><input type="radio" name="product_state" value="N"/>??????</label>
                                </td>
                            </tr>
                            <tr>
                                <th>?????????</th>
                                <td>
                                    <input type="text" name="product_name" placeholder='???????????? ??????????????????.' defaultValue={origin.product_name} className="productInput"/>
                                </td>
                            </tr>
                            <tr>
                                <th>????????????</th>
                                <td><input type="text" name="price" placeholder='????????? ??????????????????.' defaultValue={origin.price} className="productInput"/></td>
                            </tr>
                            <tr>
                                <th>??????</th>
                                <td><input type="text" name="cost" placeholder='????????? ??????????????????.' defaultValue={origin.cost} className="productInput"/></td>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                        <button type='submit'>????????????</button>
                    </div>
                </form>
            )}
        </EditContainer>
    );
});

export default ProductEdit;