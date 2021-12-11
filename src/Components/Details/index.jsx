import React from 'react';
import styled from 'styled-components'
import hat from '../../assets/desktop/details/hat.svg'
import desktop_head_1 from '../../assets/desktop/details/head_1.png'
import desktop_head_2 from '../../assets/desktop/details/head_2.png'

const Details = styled.div`
    position: relative;
    margin-top: 101px;
    width: 100%;
    height: 351px;
    background: #E9FFF2;
    
    @media screen and (max-width: 805px) {
        margin-top: 55px;
        height: 410px;
    }
    
    div:first-of-type {
        position: relative;
        width: fit-content;
        padding-top: 74px;
        margin: 0 auto;
        font-size: 64px;
        font-weight: 900;
        line-height: 76px;
        text-transform: uppercase;
        
        @media screen and (max-width: 1235px) {
            font-size: 56px;
            line-height: 68px;
        }
        
        @media screen and (max-width: 1135px) {
            font-size: 48px;
            line-height: 60px;
        }
        
        @media screen and (max-width: 805px) {
            font-size: 40px;
            line-height: 52px;
            padding-top: 49px;
        }
        
        @media screen and (max-width: 620px) {
            font-size: 30px;
            line-height: 38px;
        }
    }
`

const StyledImg = styled.img`
    position: absolute;
    background-size: cover;
    bottom: 0;
        
    @media screen and (max-width: 1135px) {
        :first-of-type {
            width: 251px;
            height: 217px;
        }
    
        :last-of-type {
            width: 204px;
            height: 239px;
        }
    }
    
    @media screen and (max-width: 980px) {
        :first-of-type {
            width: 221px;
            height: 187px;
        }
    
        :last-of-type {
            width: 174px;
            height: 209px;
        }
    }
    
    @media screen and (max-width: 805px) {
        :first-of-type {
            width: 191px;
            height: 157px;
        }
        
        :last-of-type {
            width: 144px;
            height: 179px;
        }
    }
`

const Hat = styled.img`
    position: absolute;
    top: 53px;
    left: -30px;
    
    @media screen and (max-width: 1135px) {
        width: 64px;
        height: 53px;
        top: 58px;
        left: -27px;
    }
    
    @media screen and (max-width: 805px) {
        width: 54px;
        height: 43px;
        top: 36px;
        left: -24px;
    }
    
    @media screen and (max-width: 620px) {
        width: 44px;
        height: 33px;
        top: 38px;
        left: -20px;
    }
`

const Text = styled.div`
    box-sizing: border-box;
    width: 735px;
    height: 63px;
    margin: 25px auto 0;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    
    @media screen and (max-width: 1235px) {
        width: 650px;
        height: fit-content;
    }
    
    @media screen and (max-width: 1135px) {
        width: 550px;
    }
    
    @media screen and (max-width: 925px) {
        width: 460px;
    }
    
    @media screen and (max-width: 805px) {
        margin-top: 17px;
        width: 332px;
        height: 144px;
        font-size: 16px;
        line-height: 20px;
    }
`

function Index() {
    return (
        <Details>
            <div><Hat src={hat}/>details</div>
            <Text>According to their role, profession, guild, and number of tokens that they have, different NFTs wield
                different power in this DAO. There are 5 major types of guilds: leaders guild, developers guild,
                influencers guild, trading guild, investor guild, and community guild.</Text>
            <StyledImg style={{"left": "0"}} src={desktop_head_1}/>
            <StyledImg style={{"right": "0"}} src={desktop_head_2}/>
        </Details>
    );
}

export default Index;