import React, { memo } from 'react';
import styled from 'styled-components';

const AdminLoadingivContainer = styled.div`
    padding: 10px;
    background-color: #dfdfdf;
    height: 594px;
    &>p{
        display:block;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        line-height: 581px;
        color:#aeaeae;
    }
`;
const AdminLoading = memo(() => {
    return (
        <AdminLoadingivContainer>
            <p>Large Bread 관리자 페이지입니다. 메뉴를 선택해주세요.</p>
        </AdminLoadingivContainer>
    );
});

export default AdminLoading;