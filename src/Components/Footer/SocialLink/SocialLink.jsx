import React from 'react';
import styled from 'styled-components'

const StyledLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    transition: all .3s ease-in-out;
    
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    
    @media screen and (max-width: 1100px) {
        font-size: 14px;
    }

    a {
        margin-left: 5px;
        text-decoration: none;
        color: black;
    }
`

function SocialLink({href, src, text}) {
    return (
        <StyledLink>
            <img src={src} alt={text}/>
            <a href={href} target="_blank" rel="noreferrer">{text}</a>
        </StyledLink>
    );
}

export default SocialLink;