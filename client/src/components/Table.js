import styled from 'styled-components';

const Table = styled.table`
    text-align: center;
    font-size: 14px;
    width: 100%;
    border-top: 3px solid #ae2a2f;
    margin: auto;
    th{
        color: #ae2a2f;
        background: #fff;
        padding: 10px;
        border: 3px solid #ae2a2f;
        font-weight: 600;
        &:first-child{border-left: 0;}
        &:last-child{border-right: 0;}
    }
    tr{
        &:last-child{ border-bottom: 3px solid #ae2a2f;}
    }
    td{
        padding: 5px;
        border: 1px solid #dcdcdc;
        background: #fff;
        font-size: 15px;
        border-right:3px solid #ae2a2f;
        color: #292929;
        &:first-child{border-left: 0;}
        &:last-child{border-right: 0;}
    }
`;

export default Table;