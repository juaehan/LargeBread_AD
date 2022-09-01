import React, { memo } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuLinkContainer = styled(NavLink)`
    display: inline-block;
    background: #ae2a2f;
    line-height: 40px;
    align-content: center;
    padding: 10px 50px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border-radius: 10px 10px 0 0;
    &.active{
        background-color: #dfdfdf;
        color: #000;
    }
`;

const MenuLink = memo(({to, children}) => {
    return (
        <MenuLinkContainer to={to}>{children}</MenuLinkContainer>
    );
});

export default MenuLink;