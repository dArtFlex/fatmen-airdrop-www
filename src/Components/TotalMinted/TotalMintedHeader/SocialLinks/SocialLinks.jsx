import React from 'react';
import styled from 'styled-components'
import twitter from '../../../../assets/desktop/logos/twitter.svg'
import discord from '../../../../assets/desktop/logos/discord.svg'
import SocialLink from '../SocialLink/SocialLink'

const StyledLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 221px;
    height: 19px;
    
    @media screen and (max-width: 1100px) {
        width: 190px;
    }
`

function SocialLinks() {
    return (
        <StyledLinks>
            <SocialLink href='https://twitter.com/dartflexart' src={twitter} text='twitter'/>
            <SocialLink href='https://discord.gg/pTac7HVUG2' src={discord} text='discord'/>
        </StyledLinks>
    );
}

export default SocialLinks;