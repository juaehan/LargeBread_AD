import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderList } from '../slices/OrderListSlice';
import Table from '../components/Table';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import dayjs from 'dayjs';

const OrderList = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.OrderListSlice);
    const [orderDt, setOrderDt] = React.useState(dayjs().format('YYYY-MM-DD'));


    React.useEffect(() => {
        dispatch(getOrderList());
    }, [dispatch]);

    const onDateChange = React.useCallback(e => {
        e.preventDefault();
        setOrderDt(e.target.value);
    },[])
    return (
        <div>
            <Spinner visible={loading} />
            <form>
                <input type="date" placeholder='날짜를 선택하세요.' value={orderDt} onChange={onDateChange} />
            </form>

            {error ? <ErrorView error={error} /> : (
                <Table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>주문번호</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.data.item.map((v, i) => {
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{v.sale_code}</td>
                                    <td>{v.product_name}</td>
                                    <td>{v.amount}</td>
                                    <td>{v.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            )}
        </div>
    );
});

export default OrderList;