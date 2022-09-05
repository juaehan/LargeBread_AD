import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderList } from '../slices/OrderListSlice';
import Table from '../components/Table';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const OrderList = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.OrderListSlice);

    /** 날짜 보내기 */
    const [targetDt, setTargetDt] = React.useState('');

    /** 날짜 변경 함수 */
    const onDateChange = React.useCallback(e => {
        e.preventDefault();
        setTargetDt(e.target.value);
    }, []);

    React.useEffect(() => {
        dispatch(getOrderList({
            query: targetDt
        }));
    }, [dispatch, targetDt]);

    let amountSum = 0;
    let priceSum = 0;
    let costSum = 0;
    data && data.data.item.map((v, i) => {
        amountSum += v.amount;
        priceSum += v.price;
        costSum += v.cost;
    })
    let sale = priceSum - costSum;
    return (
        <div>
            <Spinner visible={loading} />
            <form style={{marginBottom: "20px"}}>
                <input type="date" name="startDate" value={targetDt} onChange={onDateChange} style={{padding: "5px", width: "130px", fontSize : "13px", border: "2px solid #fec24a"}} />
            </form>

            {error ? <ErrorView error={error} /> : (
                <Table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>날짜</th>
                            <th>주문번호</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>판매가격</th>
                            <th>원가</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.data.item.map((v, i) => {
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{v.date}</td>
                                    <td>{v.sale_code}</td>
                                    <td>{v.product_name}</td>
                                    <td>{v.amount}</td>
                                    <td>{v.price.toLocaleString()}원</td>
                                    <td>{v.cost.toLocaleString()}원</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                            <tr style={{borderBottom: "3px solid #ae2a2f", fontWeight: "600"}}>
                                <td colSpan={4}>합계</td>
                                <td>{amountSum.toLocaleString()}개</td>
                                <td>{priceSum.toLocaleString()}원</td>
                                <td>{costSum.toLocaleString()}원</td>
                            </tr>
                            <tr style={{fontWeight: "600"}}>
                                <td colSpan={4}>순이익</td>
                                <td colSpan={3}>{sale.toLocaleString()}원</td>
                            </tr>
                    </tfoot>
                </Table>
            )}
        </div>
    );
});

export default OrderList;