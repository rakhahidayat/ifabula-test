import styled from "styled-components";
import { NavLink as navLink} from "react-router-dom";
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background : #fff;
    height : 80px;
    display:flex;
    justify-content:space-between;
    padding: 0.5rem calc(100vw - 1000px) / 2;
    z-index : 10;
    box-shadow: 10px 10px 5px rgb(0 0 0 / 10%);
`;

export const NavLink = styled(navLink)`
    color:#000;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 2rem;
    height:100%;
    cursor:pointer;
    font-size:13px;
    font-family:"Proxima-Nova-Semibold";

    &:hover{
        color : #FEB300;
    }

    &.active{
        color : #FEB300;
    }
    @media screen and (max-width: 768px){
        display : block;
        padding:0rem;
    }
`;

export const Link = styled.a`
    color:#000;
    display:flex;
    align-items:center;
    text-decoration:none;
    font-family:"Proxima-Nova-Semibold";
    padding:0 2rem;
    height:100%;
    cursor:pointer;
    font-size:13px;

    &:hover{
        color : #FEB300;
    }

    &.active{
        color : #FEB300;
    }
    @media screen and (max-width: 768px){
        display : block;
        padding:0rem;
    }
`;

export const Bars = styled(FaBars)`
    display:none;
    color:#000;

    @media screen and (max-width: 768px){
        display : block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 75%);
        font-size : 1.8rem;
        cursor:pointer
    }
`;

// export const NavMenu = styled.div`
//     display : flex;
//     align-items: center;
//     margin-right: -24px;

//     @media screen and (max-width:768px){
//         display:none;
//     }
// `;

export const NavMenu = styled.div`
    display : flex;
    align-items: center;
    margin-left: -24px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtn = styled.nav`
    display:flex;
    align-items : center;
    margin-right : 24px;
    
    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius : 4px;
    background : #53006A;
    padding : 10px 22px;
    color : #fff;
    border : none;
    outline : none;
    cursor : pointer;
    transition : all 0.2s ease-in-out;
    text-decoration : none;

    &:hover{
        transition : all 0.2s ease-in-out;
        color : #fff;
        color : #010606;
    }
`;