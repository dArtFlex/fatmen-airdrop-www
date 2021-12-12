import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { connectWallet, claim, provider, getMinted, getDafOnInfo } from "../../../utils/web3";
import { Buttons } from "../../../Pages/SecretPage/SecretPage";

const StyledBox = styled.div`
  margin: 44px auto 0;
  padding: 4px 3px;
  width: 351px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1050px) {
    width: 210px;
    margin-top: 42px;
    flex-direction: column;
  }

  @media screen and (max-width: 740px) {
    justify-content: center;
  }

  @media screen and (max-width: 555px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 555px) {
    margin: 42px auto 0;
  }
`;

const StyledInputBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  background-color: white;
  height: 100%;
  width: 200px;
  border-radius: 10px;
  font-weight: 700;
`;

const Input = styled.input`
  text-align: center;
  border: none;
  outline: none;
`;

const StyledButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #ee4646;
  color: white;
  font-weight: 700;

  transition: all 0.3s ease-in-out;

  :hover {
    font-size: 25px;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const MintButton = styled.div`
  box-sizing: border-box;
  width: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 15px;
  background: #ee4646;
  border-radius: 10px;
  text-transform: uppercase;
  color: white;
  text-align: center;

  @media screen and (max-width: 1050px) {
    margin-top: 32px;
  }

  transition: all 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  span {
    line-height: 19px;
    font-weight: 700;
  }
`;

const StyledButtons = styled(Buttons)`
  display: ${({ visible }) => (visible && visible !== null ? "flex" : "none")};
  width: ${({ fullWidth }) => (fullWidth && fullWidth !== null ? "auto" : "33%")};
  height: auto;
  max-width: 400px;
  margin: 5px auto 0;

  @media screen and (max-width: 885px) {
    width: 49%;
    justify-content: space-between;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
    justify-content: center;
  }
`;

const StyledMintButton = styled(MintButton)`
  margin-top: 0;

  @media screen and (max-width: 605px) {
    margin-top: 15px;
  }

  @media screen and (max-width: 595px) {
    width: 90%;
    height: 50px;
  }

  @media screen and (max-width: 595px) {
    margin-top: 20px;
  }
`;

const PartnerContainer = styled.div`
  position: absolute;
  top: 15px;
  left: calc(100% + 25px);
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 8px solid black;
  border-radius: 10px;
  font-size: 26px;
  text-align: center;

  a {
    width: 90%;
    height: 110px;
    text-decoration: none;
  }

  @media screen and (max-width: 1475px) {
    width: 250px;
    height: 150px;
    font-size: 22px;

    img {
      height: 100px;
    }
  }

  @media screen and (max-width: 1215px) {
    width: 230px;
    font-size: 20px;
  }

  @media screen and (max-width: 1110px) {
    width: 170px;
    height: 125px;
    font-size: 16px;

    img {
      width: 140px;
      height: 75px;
    }
  }

  @media screen and (max-width: 930px) {
    width: 125px;
    height: 100px;
    font-size: 14px;

    img {
      width: 60px;
      max-width: 60px;
      height: 50px;
    }
  }
`;

const PartnerImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 125px;
  height: 125px;
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;

  span {
    padding-right: 8px;
    font-family: arial;
    font-weight: 300;
    display: inline-block;
    font-size: 72px;
    color: #4a3d3d;

    @media screen and (max-width: 1120px) {
      font-size: 40px;
      line-height: 48px;
    }

    @media screen and (max-width: 800px) {
      font-size: 30px;
      line-height: 38px;
    }
  }
`;

const Block = styled.div`
  height: ${({ visible }) => (!visible ? "275px" : "375px")};
  a {
    display: none;
  }

  @media screen and (max-width: 750px) {
    a {
      display: block;
    }
  }

  @media screen and (max-width: 550px) {
    height: ${({ visible }) => (!visible ? "275px" : "400px")};
  }
`;

const Quantity = styled.div`
  margin: 44px auto 0;
  width: 300px;
  height: 25px;
  text-transform: uppercase;
  font-size: 21px;
  line-height: 25px;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 825px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 620px) {
    margin-top: 22px;
  }

  @media screen and (max-width: 595px) {
    margin-top: ${({ visible }) => (visible ? "190px" : "20px")};
  }
`;

export default function MintNow({ setVisibleCallback }) {
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const ref = useRef();
  const parentRef = useRef();
  const mintedRef = useRef();
  const dafAvailableRef = useRef();
  const claimEnableRef = useRef();
  const claimAmountRef = useRef();
  const claimCountRef = useRef();

  useEffect(() => {
    const asyncMinted = async () => {
      await getMinted(mintedRef);
    };
    const asyncGetDafOnInfo = async () => {
      await getDafOnInfo(dafAvailableRef, claimEnableRef, claimAmountRef, claimCountRef, setDisable);
    };

    asyncGetDafOnInfo();
    asyncMinted();
  }, [provider]);

  const handleClickConnect = () => {
    connectWallet().then(() => {
      setVisible(true);
      setVisibleCallback(true);
    });
  };

  return (
    <Block visible={visible}>
      <StyledButtons visible={!visible} fullWidth>
        <MintButton
            style={{ width: '100%' }}
            ref={parentRef}
            onClick={handleClickConnect}
          >
            <div ref={ref}>Connect Wallet</div>
        </MintButton>
      </StyledButtons>
      <StyledButtons visible={visible} fullWidth>
        <ImageBox>
          <div>DAF on contract:</div>
          <div style={{ color: "#ee4646" }} ref={dafAvailableRef}>0</div>
        </ImageBox>
        <ImageBox>
          <div>Claim for YOU:</div>
          <div style={{ color: "#28a745" }} ref={claimEnableRef}>Enable</div>
        </ImageBox>
        <ImageBox>
          <div>Your DAF Amount:</div>
          <div style={{ color: "#28a745" }} ref={claimAmountRef}>0</div>
        </ImageBox>
        <ImageBox>
          <div>Already Claimed:</div>
          <div style={{ color: "#6c757d" }} ref={claimCountRef}>0</div>
        </ImageBox>
        {disable && <StyledMintButton style={{ width: '100%' }} onClick={claim} >Claim</StyledMintButton>}
      </StyledButtons>
      <Quantity visible={visible}>
        total minted:{" "}
        <span style={{ color: "#ee4646" }}>
          <span ref={mintedRef}>0</span>
        </span>
      </Quantity>
    </Block>
  );
}
