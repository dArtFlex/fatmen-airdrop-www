import React from 'react';
import styled from 'styled-components'
import logo from '../../assets/desktop/logos/Logo.svg'
import SocialLinks from "./SocialLinks/SocialLinks";

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    margin-top: 201px;
    margin-bottom: 24px;
    padding: 0 94px;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1035px) {
        > img {
            display: none;
        }
        
        flex-direction: column-reverse;
    }
    
    @media screen and (max-width: 1035px) {
        padding: 0;
        margin: 74px auto 16px;
    }
`

const DropDate = styled.div`
    width: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    margin: 0 auto;
    
    @media screen and (max-width: 1100px) {
        width: fit-content;
        font-size: 14px;
    }
    
    @media screen and (max-width: 1035px) {
        padding: 0;
        margin-top: 35px;
        position: static;
    }
`

function Footer() {
    return (
        <StyledFooter>
            <img src={logo} alt='logo'/>
            <DropDate>©2021 d'ArtFlex. All rights reserved.</DropDate>
            <SocialLinks/>
        </StyledFooter>
    );
}

export default Footer;