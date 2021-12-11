import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

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
  top: -35px;
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

  @media screen and (max-width: 1180px) {
    width: 250px;
    font-size: 10px;
    right: -68%;
  }

  @media screen and (max-width: 1040px) {
    width: 200px;
    font-size: 10px;
    right: -56%;
  }

  @media screen and (max-width: 880px) {
    width: 150px;
    font-size: 9px;
    right: -43%;
    top: -33px;
  }

  @media screen and (max-width: 780px) {
    width: 305px;
    font-size: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50px;

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

const ReadDetails = styled.span`
  color: #00adff;
  transition: color 200ms ease-in-out;
  user-select: none;

  :hover {
    color: #0066ff;
  }
`;

const StyledLink = styled.a`
  color: rgb(238, 70, 70);
  transition: color 200ms ease-in-out;
  text-decoration: none;

  :hover {
    color: rgb(255 148 148);
  }
`;

const InfoText = styled.span`
  font-size: 18px;
  font-weight: 400 !important;
  text-shadow: 0 0 #a7a7a7;
`;

const DafDetails = ({ active, setActive }) => {
  const handleSetActive = () => {
    setActive(!active);
  };

  return (
    <Container>
      <p>
        <InfoText>DAF payout for presale participants</InfoText>{" "}
        <ReadDetails onClick={() => handleSetActive()}>
          (read details)
        </ReadDetails>
      </p>
      <Tooltip active={active}>
        <TooltipHeader>
          <b>DAF</b>
        </TooltipHeader>
        <TooltipBody>
          <div>
            <StyledLink href="https://tonswap.io/tokens/0:bf1c7c0e8a187d9d5ba6069bf768b69a982df8b22ef8430b31dcc4f97263507e">
              DAF
            </StyledLink>{" "}
            is the native token of dArtFlex platform.
          </div>
          <div>
            Every participant of the presale on September 22 will be able to
            claim 50 DAF for each bought NFT.
          </div>
        </TooltipBody>
      </Tooltip>
    </Container>
  );
};

export default DafDetails;
