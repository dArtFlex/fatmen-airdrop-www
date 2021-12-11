import React from 'react';
import styled from 'styled-components'
import fatty_welcome from '../../assets/desktop/welcome/fatty_welcome.png'

const StyledBox = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 180px auto 0;
    padding: 0 67px;
    width: 1252px;
    height: 545px;
    border-radius: 20px;
    background-color: #FFFBAE;
    
    img {
        align-self: center;
        background-size: cover;
        
        @media screen and (max-width: 1252px) {
            width: 350px;
            height: 350px;
        }
        
        @media screen and (max-width: 1080px) {
            width: 296px;
            height: 296px;
        }
        
        @media screen and (max-width: 805px) {
            margin-top: 23px;
            margin-bottom: 18px;
        }
        
    }
    
    @media screen and (max-width: 1252px) {
        width: 95%;
    }
    
    @media screen and (max-width: 805px) {
        flex-direction: column;
        align-content: space-between;
        height: fit-content;
        margin-top: 144px;
        padding: 0 20px;
    }
`

const WelcomeText = styled.div`
    width: fit-content;
    margin-top: 72px;
    font-weight: 900;
    font-size: 64px;
    line-height: 76px;
    text-transform: uppercase;
    
    @media screen and (max-width: 1252px) {
        font-size: 54px;
        line-height: 66px;
    }
    
    @media screen and (max-width: 1080px) {
        font-size: 38px;
        line-height: 50px;
    }
    
     @media screen and (max-width: 805px) {
        font-size: 30px;
        line-height: 36px;
        margin: 32px auto 0;
    }
`

const WelcomeDescription = styled.div`
    margin-top: 25px;
    width: 530px;
    height: 105px;
    font-size: 18px;
    font-weight: normal;
    line-height: 21px;
    
    @media screen and (max-width: 1252px) {
        width: 350px;
        font-size: 16px;
        line-height: 19px;
    }
    
    @media screen and (max-width: 805px) {
        width: 296px;
        height: 160px;
        font-size: 16px;
        line-height: 20px;
        margin: 17px auto 0;
    }
`

function Welcome() {
    return (
        <StyledBox>
            <div>
                <WelcomeText>
                    <div>welcome to a</div>
                    <div>parallel</div>
                    <div>crypto world</div>
                </WelcomeText>
                <WelcomeDescription>
                    Imagine that Satoshi Nakamoto is a real man from Japan. Hunted by police, special forces, the mafia,
                    and dozens of organizations from all over the world, Satoshi invents a special machine and escapes
                    by creating a new metaverse, where crypto enthusiasts have all the power.
                </WelcomeDescription>
            </div>
            <img src={fatty_welcome} alt="fatty_welcome"/>
        </StyledBox>
    );
}

export default Welcome;