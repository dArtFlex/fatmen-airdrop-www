import React from 'react';
import styled from 'styled-components'
import beer_guy from '../../assets/desktop/bonuses/beer_guy.png'

const Bonuses = styled.div`
    position: relative;
    margin: 101px auto 0;
    display: flex;
    width: 1252px;
    height: 465px;
    background: #FFFBAE;
    
    font-size: 18px;
    
    @media screen and (max-width: 1262px) {
        width: 95%;
    }
    
    @media screen and (max-width: 805px) {
        margin-top: 55px;
        flex-direction: column;
        align-content: space-between;
        height: 588px;
    }
    
    ul {
        margin-top: 25px;
        margin-left: 60px;
        
        strong {
            font-weight: 700;
        }
        
         @media screen and (max-width: 1135px) {
            width: 450px;
         }
         
         @media screen and (max-width: 1035px) {
            width: 375px;
         }
         
         @media screen and (max-width: 930px) {
            width: 325px;
         }
         
         @media screen and (max-width: 805px) {
            width: 300px;
            padding: 0;
            margin: 19px auto 0;
         }
         
         @media screen and (max-width: 480px) {
            font-size: 16px;
         }
    }
    
    img {
        position: absolute;
        bottom: 0;
        right: 0;
        
        @media screen and (max-width: 1135px) {
            width: 445px;
            height: 425px;
        }
        
        @media screen and (max-width: 1035px) {
            width: 405px;
            height: 385px;
        }
        
        @media screen and (max-width: 930px) {
            width: 365px;
            height: 305px;
        }
        
        @media screen and (max-width: 805px) {
            display: block;
            margin: 0 auto;
            width: 325px;
            height: 265px;
            position: static;
        }
        
        @media screen and (max-width: 480px) {
            height: 306px;
        }
    }
`

const BonusesText = styled.div`
    margin-top: 72px;
    margin-left: 78px;
    width: 482px;
    height: 152px;
    font-size: 64px;
    font-weight: 900;
    line-height: 76px;
    text-transform: uppercase;
    
    @media screen and (max-width: 1135px) {
        font-size: 56px;
        line-height: 68px;
    }
    
    @media screen and (max-width: 1035px) {
        width: 422px;
        font-size: 48px;
        line-height: 56px;
    }
    
    @media screen and (max-width: 805px) {
        height: fit-content;
        margin: 32px auto 0; 
        font-size: 40px;
        line-height: 48px;
    }
    
    @media screen and (max-width: 480px) {
       width: 296px;
       font-size: 30px;
    }
    
`

function Index() {
    return (
        <Bonuses>
            <div>
                <BonusesText><span style={{"color": "#EE4646"}}>Bonuses</span> for NFT Owners</BonusesText>
                <ul>
                    <li>Claim 10-300 <strong>DAF</strong> (depending on your NFT’s rarity)</li>
                    <li><strong>Fee discount</strong> on the d’ArtFlex platform.</li>
                    <li><strong>Extra yields</strong> from DAF farming.</li>
                    <li><strong>Special offer</strong> for upcoming NFT drops. Monthly <strong>NFT giveaway.</strong></li>
                    <li><strong>Lotteries.</strong></li>
                </ul>
            </div>
            <img src={beer_guy} alt="Guy with beer"/>
        </Bonuses>
    );
}

export default Index;