import React from 'react';
import styled from 'styled-components';

import fatty_1 from '../../../assets/desktop/fatties/fatty.png'
import fatty_2 from '../../../assets/desktop/fatties/fatty_2.png'
import fatty_3 from '../../../assets/desktop/fatties/fatty_3.png'
import fatty_4 from '../../../assets/desktop/fatties/fatty_4.png'
import fatty_5 from '../../../assets/desktop/fatties/fatty_5.png'

const fatties = [
    {
        id: 1,
        url: fatty_1,
        background: "#5FAAEF"
    },
    {
        id: 2,
        url: fatty_2,
        background: "#FF6BAC"
    },
    {
        id: 3,
        url: fatty_3,
        background: "#FF636C"
    },
    {
        id: 4,
        url: fatty_4,
        background: "#FFF593"
    },
    {
        id: 5,
        url: fatty_5,
        background: "#72F1F1"
    },
]

const StyledBox = styled.div`
    position: absolute;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: -115px;
    margin: 0 auto;
    right: 0;
    left: 0;
    height: 235px;
`

const FattyBox = styled.div`
    width: 235px;
    height: 235px;
    background-image: url(${props => props.url});
    background-size: cover;
    background-color: ${props => props.background};
    border-radius: 20px;
    
    transition: all .3s ease-in-out;
    
    :hover {
        font-size: 25px;
        cursor: pointer;
        transform: scale(1.1);
    }
    
    :nth-child(n + 2) {
        margin-left: 19px;
    }
    
    @media screen and (max-width: 1440px) {
        width: 195px;
        height: 195px;
    }
    
    @media screen and (max-width: 1100px) {
        width: 155px;
        height: 155px;
    }
    
     @media screen and (max-width: 1100px) {
        width: 145px;
        height: 145px;
     }
     
     @media screen and (max-width: 825px) {
        width: 165px;
        height: 165px;
        :first-child, :last-child {
            display: none;
        }
     }
     
     @media screen and (max-width: 625px) {
        width: 135px;
        height: 135px;
        
        :nth-child(n + 2) {
            margin-left: 8px;
        }
        
     }
     
     @media screen and (max-width: 450px) {
        width: 125px;
        height: 125px;
     }
     
     @media screen and (max-width: 450px) {
        width: 105px;
        height: 105px;
     }
`

function Fatties() {
    return (
        <StyledBox>
            {fatties.map(fatty => <FattyBox key={fatty.id} url={fatty.url} background={fatty.background}/>)}
        </StyledBox>
    );
}

export default Fatties;
