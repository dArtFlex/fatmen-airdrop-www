import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 15px;
  position: relative;

  div span {
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

const Tooltip = styled.div`
  width: 350px;
  background-color: white;
  height: fit-content;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  right: -93%;
  top: -50px;
  border-radius: 10px;
  // display: ${({ active }) => (active ? "flex" : "none")};
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out,
    transform 200ms ease-in-out;

  * {
    box-sizing: border-box;
  }
  ${({ active }) =>
    active
      ? `
    visibility: visible;
    pointer-events: all;
    opacity: 1;
    transform: scale(1);
  `
      : `
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    transform: scale(0);
  `}
  flex-direction: column;
  font-size: 12px;
  text-align: start;
  z-index: 2;

  :before {
    content: "";
    position: absolute;
    left: -10px;
    top: 50px;
    width: 20px;
    height: 20px;
    background: white;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    transform: rotate(45deg);
    z-index: -1;
  }

  @media screen and (max-width: 1175px) {
    width: 250px;
    font-size: 10px;
    right: -68%;
  }

  @media screen and (max-width: 940px) {
    width: 200px;
    font-size: 10px;
    right: -60%;
  }

  @media screen and (max-width: 850px) {
    width: 305px;
    font-size: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 35px;

    :before {
      background: rgb(238, 70, 70);
      top: -10px;
      left: 150px;
    }
  }
`;

const TooltipHeader = styled.div`
  width: 100%;
  background: rgb(238, 70, 70);
  padding: 8px;
  color: white;
  border-radius: 10px 10px 0 0;
`;

const TooltipBody = styled.div`
  padding: 8px;
  font-size: 14px;
  z-index: 2;
  position: relative;
  background: white;
  border-radius: 0 0 10px 10px;

  > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const StyledText = styled.span`
  color: #00adff;
  transition: color 200ms ease-in-out;

  :hover {
    color: #0066ff;
  }
`;

const ReadDetails = styled.span`
  color: #00adff;
  transition: color 200ms ease-in-out;
  user-select: none;

  :hover {
    color: #0066ff;
  }
`;

const InfoText = styled.span`
  font-size: 18px;
  font-weight: 400 !important;
  text-shadow: 0 0 #a7a7a7;
  cursor: default !important;
`;

const PoolsDetails = ({ active, setActive }) => {
  const handleSetActive = () => {
    setActive(!active);
  };

  const onClickHandler = (e) => {
    if (!e.target.closest(Tooltip) && active) setActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", onClickHandler);
    return () => {
      document.removeEventListener("click", onClickHandler);
    };
    // eslint-disable-next-line
  }, [active]);

  return (
    <Container>
      <div>
        <InfoText>Opening 2 pools for FatMen owners</InfoText>{" "}
        <ReadDetails onClick={() => handleSetActive()}>
          (read details)
        </ReadDetails>
        <Tooltip active={active}>
          <TooltipHeader>
            <b>POOLS</b>
          </TooltipHeader>
          <TooltipBody>
            <div>
              <StyledText>FatMen</StyledText> offers users the opportunity to
              receive a distributed part of the revenue by joining a pool!
            </div>
            <div>
              <StyledText>Level 1:</StyledText> From 20 FatMen NFTs you get 3%
              of all FatMen NFTs minting (Up to 8.3325 ETH ~27000$ split between
              users in this pool proportionally)
            </div>
            <div>
              <StyledText>Level 2:</StyledText> From 50 FatMen NFTs you get 7%
              of all FatMen NFTs minting (Up to 19.4425 ETH ~62000$ split
              between users in this pool promotionally)
            </div>
            <div>
              Purchasing FatMen NFTs earlier on in the project and purchasing
              more of them (50 or more) gives the user a higher distribution of
              the pool’s profits!
            </div>
          </TooltipBody>
        </Tooltip>
      </div>
    </Container>
  );
};

export default PoolsDetails;
