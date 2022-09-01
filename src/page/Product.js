import React, { memo } from 'react';
import Table from '../components/Table';

const Product = memo(() => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>카테고리</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>상품 상태</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th colSpan={4}>합계</th>
                    </tr>
                    <tr>
                        <th colSpan={4}>합계</th>
                    </tr>
                    <tr>
                        <th colSpan={4}>합계</th>
                    </tr>
                </tfoot>
                <tbody></tbody>
            </Table>
        </div>
    );
});

export default Product;