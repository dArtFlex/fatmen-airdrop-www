import React from 'react';
import styled from 'styled-components';
import group from '../../assets/desktop/metaverse/Group 1.png';

const StyledBox = styled.div`
    margin: 93px 171px 0 138px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1375px) {
        margin: 93px 130px 0 100px;
    }
    
    @media screen and (max-width: 1375px) {
        margin: 93px 100px 0 75px;
    }
    
    @media screen and (max-width: 1200px) {
        margin: 93px 55px 0;
    }
    
    @media screen and (max-width: 1030px) {
        margin: 93px auto 0;
    }
    
    @media screen and (max-width: 805px) {
        flex-direction: column-reverse;
        margin-top: 55px;
    }
    
    img {
    
        background-size: cover;
        
        @media screen and (max-width: 1375px) {
            width: 550px;
            height: 300px;
        }
        
        @media screen and (max-width: 1200px) {
            width: 450px;
            height: 275px;
        }
        
        @media screen and (max-width: 1030px) {
            width: 400px;
            height: 250px;
        }
        
        @media screen and (max-width: 875px) {
            margin-top: 47px;
            width: 360px;
            height: 200px;
        }
    }
`

const Text = styled.div`
    width: 456px;
    height: 168px;
    font-size: 18px;
    line-height: 21px;
    
    @media screen and (max-width: 840px) {
        width: 405px;
        font-size: 16px;
        line-height: 20px;
    }
    
    @media screen and (max-width: 805px) {
        width: 332px;
        height: 200px;
    }
`

function Index() {
    return (
        <StyledBox>
            <img src={group} alt="group"/>
            <Text>
                It turns out that it’s impossible to make a perfect copy of our world. Satoshi arrives in his metaverse
                looking like a sumo wrestler. And everyone else in this crypto world looks really fat, too. Local copies
                do the same things as their originals on Earth - they are just like our real crypto leaders, developers,
                influencers, investors, and community members.
                <strong>The governance of Satoshi’s crypto metaverse is organized by DAO.</strong>
            </Text>
        </StyledBox>
    );
}

export default Index;