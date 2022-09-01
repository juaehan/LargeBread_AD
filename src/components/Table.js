import styled from 'styled-components';

const Table = styled.table`
    text-align: center;
    font-size: 14px;
    width: 100%;
    border-top: 3px solid #ae2a2f;
    margin: auto;
    th{
        color: #000;
        background: #fff;
        padding: 10px;
        border: 1px solid #000;
        border-bottom: 3px solid #ae2a2f;
        font-weight: 600;
        &:first-child{border-left: 0;}
        &:last-child{border-right: 0;}
    }
`;

export default Table;