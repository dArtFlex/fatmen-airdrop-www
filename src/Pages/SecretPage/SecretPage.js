import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import { connectWallet, mint, provider } from "../../utils/web3";

const Body = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const StyledBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledInputBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10px;
  background-color: white;
  height: 100%;
  width: 200px;
  border-radius: 10px;
  font-weight: 700;
  border: 2px solid #EE4646;
  border-radius: 10px;
`

const Input = styled.input`
    text-align: center;
    border: none;
    outline: none;
`

const StyledButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #EE4646;
  color: white;
  font-weight: 700;
  
  transition: all .3s ease-in-out;
    
  :hover {
      font-size: 25px;
      cursor: pointer;
      transform: scale(1.1);
  }
`

const MintButton = styled.div`
    display: ${({ display }) => display && display !== null ? 'flex' : 'none'};
    box-sizing: border-box;
    width: 118px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 15px;
    background: #EE4646;
    border-radius: 10px;
    text-transform: uppercase;
    color: white;
    
    transition: all .3s ease-in-out;
    
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    
    span {
      line-height: 19px;
      font-weight: 700;
    }
    
    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`

const MainMintButton = styled(MintButton)`
    display: flex;
    text-align: center;
`

export const Buttons = styled.div`
    width: 50%;
    max-width: 600px;
    justify-content: space-between;
    align-items: center;
    display: ${({ display }) => display ? 'flex' : 'none'};
    flex-wrap: wrap;
    
    @media screen and (max-width: 1035px) {
        width: 34%;
        max-width: 385px;
    }
    
    @media screen and (max-width: 695px) {
        justify-content: center;
    }
`

export default function MintNow() {

    const [quantity, setQuantity] = useState(1)
    const [visible, setVisible] = useState(false)

    const ref = useRef()
    const parentRef = useRef();
    const smallRef = useRef();

    const increment = () => {
        if (quantity < 50) {
            setQuantity(prev => prev + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    useEffect( () => {
        ref.current.innerHTML = provider && provider !== null ? 'Mint Now' : 'Connect <br/> Wallet'
    }, [provider])

    const handleChange = (e) => {
        setQuantity((prev) => {
            if (isNaN(+e.target.value) || +e.target.value < 0) return +prev
            console.log(prev, +e.target.value)
            if (+prev <= 5555 && +e.target.value > 5555) {
                return +prev
            }
            return +e.target.value
        })
    };

    const handleClickConnect = () => {
        connectWallet()
            .then(() => {
                ref.current.innerHTML = 'Mint Now';
                setVisible(true)
            })
    }

    const handleClickMint = (quantity) => {
        mint(quantity)
    }

    return (
        <Body>
            <StyledBox>
                <StyledInputBox>
                    <StyledButton onClick={decrement} style={{"left": '3px'}}>-</StyledButton>
                    <Input onChange={(e) => handleChange(e)} value={quantity}/>
                    <StyledButton onClick={increment} style={{"right": '3px'}}>+</StyledButton>
                </StyledInputBox>
                <MainMintButton onClick={visible ? () => handleClickMint(quantity) : handleClickConnect} ref={parentRef}><span ref={ref}>Mint Now</span></MainMintButton>
                <Buttons display={visible}>
                    <MintButton onClick={() => mint(5)} ref={smallRef}><span>Mint 5</span></MintButton>
                    <MintButton onClick={() => mint(10)} ref={smallRef}><span>Mint 10</span></MintButton>
                    <MintButton onClick={() => mint(20)} ref={smallRef}><span>Mint 20</span></MintButton>
                    <MintButton onClick={() => mint(50)} ref={smallRef}><span>Mint 50</span></MintButton>
                </Buttons>
            </StyledBox>
        </Body>
    )
}
