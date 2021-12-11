import React from 'react';
import styled from 'styled-components'
import logo from '../../../assets/desktop/logos/Logo.svg'
import SocialLinks from "./SocialLinks/SocialLinks";

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DropDate = styled.div`
    width: fit-content;
    position: absolute;
    color: #EE4646;
    left: 0;
    right: 0;
    text-align: center;
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    margin: 0 auto;
    
    @media screen and (max-width: 1100px) {
        font-size: 14px;
    }
    
    @media screen and (max-width: 1000px) {
        width: 219px;
        top: 35px;
        font-size: 14px;
    }
    
    @media screen and (max-width: 825px) {
        width: 219px;
        top: 55px;
        font-size: 14px;
    }
    
    @media screen and (max-width: 620px) {
        width: 219px;
        top: 75px;
        font-size: 14px;
    }
`



function ToTalMintedFooter() {
    return (
        <StyledHeader>
            <img src={logo} alt='logo'/>
                <DropDate>Drop date: September, 23</DropDate>
            <SocialLinks/>
        </StyledHeader>
    );
}

export default ToTalMintedFooter;