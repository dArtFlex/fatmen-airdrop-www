import React, { useState } from "react";
import styled from "styled-components";
import pinIcon from "../../assets/desktop/pin.png";
import DafDetails from "./DafDetails";
import PoolsDetails from "./PoolsDetails";

const Container = styled.div`
  box-sizing: border-box;
  font-family: Rubik;
  background-color: #e9fff2;
  width: 100%;
  margin: 25px auto 0;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    max-width: 100%;
  }

  h2 {
    margin: 0;
  }

  p span {
    font-weight: 700;
    cursor: pointer;
  }
`;

const RodmapContainer = styled.div`
  margin-top: 40px;
  display: flex;
  width: 50%;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  ${({ mobile }) =>
    mobile
      ? `
      flex-direction: column;
      align-items: center;
      > div:not(:last-child) {
        margin-bottom: 20px;
      }
      display: none;
      @media screen and (max-width: 820px) {
        display: flex;
      }
      `
      : `
      @media screen and (max-width: 820px) {
        display: none;
      }
      `}
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  > div:not(:first-child) {
    margin-top: 60px;
  }
`;

const RightColumn = styled.div`
  margin-top: 100px;
  margin-left: 120px;
  display: flex;
  flex-direction: column;

  > div:not(:first-child) {
    margin-top: 60px;
  }
`;

const RoadmapItem = styled.div`
  width: 300px;
  height: 160px;
  margin-top: 10px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  background: #bde2f5;
  box-shadow: 0 0 6px rgb(0 0 0 / 10%);
  // padding: 15px;
  border-radius: 10px;
  position: relative;
  transition: transform 300ms ease-in-out;

  :hover {
    transform: scale(1.05);
    > img {
      opacity: 1;
      top: -30px;
      transform: rotate(${({ right }) => (right ? "0deg" : "-90deg")});
    }
  }

  p {
    margin: 0;
    font-weight: 700;
  }
`;

const PinImage = styled.img`
  opacity: 0;
  width: 40px;
  position: absolute;
  transform: rotate(-45deg);
  ${({ right }) => (right ? "right: -30px;" : "left: -30px;")}
  top: -50px;
  // transform: rotate(${({ right }) => (right ? "0deg" : "-90deg")});

  transition: opacity 300ms ease-in-out, top 300ms ease-in-out,
    transform 300ms ease-in-out;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #0066ff;
  transition: color 200ms ease-in-out;

  :hover {
    color: #609fff;
  }
`;

const RoadmapHeader = styled.div`
  width: 100%;
  background: rgb(105 136 222);
  border-radius: 10px 10px 0 0;
  padding: 8px;
  color: white;
`;

const RoadmapBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100% - 35px);
  color: black;
  text-shadow: 0 0 #a7a7a7;
  cursor: default;
`;

const Roadmap = () => {
  const [activePools, setActivePools] = useState(false);
  const [activeDaf, setActiveDaf] = useState(false);

  const hideTooltip = () => {
    if (activePools || activeDaf) {
      setActivePools(false);
      setActiveDaf(false);
    }
  };

  return (
    <Container onClick={(e) => hideTooltip(e)}>
      <h2>Launch September 23</h2>
      <PoolsDetails active={activePools} setActive={setActivePools} />
      <DafDetails active={activeDaf} setActive={setActiveDaf} />
      <RodmapContainer>
        <LeftColumn>
          <RoadmapItem>
            <PinImage src={pinIcon} />
            <RoadmapHeader>
              <p>10% SOLD</p>
            </RoadmapHeader>
            <RoadmapBody>
              <div>
                5x FatMen & 1x{" "}
                <StyledLink
                  href="https://www.angryboars.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Angry Boar
                </StyledLink>{" "}
                will be ruffled to lucky holders{" "}
              </div>
            </RoadmapBody>
          </RoadmapItem>
          <RoadmapItem>
            <PinImage src={pinIcon} />
            <RoadmapHeader>
              <p>30% SOLD</p>
            </RoadmapHeader>
            <RoadmapBody>
              <div>
                iPhone 13 pro max Giveaway (or equivalent in ETH) to a lucky
                FatMan holder
              </div>
            </RoadmapBody>
          </RoadmapItem>
          <RoadmapItem>
            <PinImage src={pinIcon} />
            <RoadmapHeader>
              <p>50% SOLD</p>
            </RoadmapHeader>
            <RoadmapBody>
              <div>5 ETH Giveaway split among 5 lucky holders</div>
            </RoadmapBody>
          </RoadmapItem>
        </LeftColumn>
        <RightColumn>
          <RoadmapItem right>
            <PinImage src={pinIcon} right />
            <RoadmapHeader>
              <p>20% SOLD</p>
            </RoadmapHeader>
            <RoadmapBody>
              <div>
                10x FatMen & 1x{" "}
                <StyledLink
                  href="https://www.angryboars.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Angry Boar
                </StyledLink>{" "}
                will be ruffled to lucky holders{" "}
              </div>
            </RoadmapBody>
          </RoadmapItem>
          <RoadmapItem right>
            <PinImage src={pinIcon} right />
            <RoadmapHeader>
              <p>40% SOLD</p>
            </RoadmapHeader>
            <RoadmapBody>
              <div>
                <StyledLink
                  href="https://opensea.io/collection/timepiece-community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TIMEPiece Community NFT Giveaway worth of 1 ETH
                </StyledLink>
              </div>
            </RoadmapBody>
          </RoadmapItem>
          <RoadmapItem right>
            <PinImage src={pinIcon} right />
            <RoadmapHeader>
              <p>100% SOLD</p>
            </RoadmapHeader>
            <RoadmapBody>
              <div>
                Charity auction for the sale of NFT animation from TO420. The
                proceeds will go to the fund to support young artists on the
                dartflex.art platform
              </div>
            </RoadmapBody>
          </RoadmapItem>
        </RightColumn>
      </RodmapContainer>
      <RodmapContainer mobile>
        <RoadmapItem>
          <PinImage src={pinIcon} />
          <RoadmapHeader>
            <p>10% SOLD</p>
          </RoadmapHeader>
          <RoadmapBody>
            <div>
              5x FatMen & 1x{" "}
              <StyledLink
                href="https://www.angryboars.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angry Boar
              </StyledLink>{" "}
              will be ruffled to lucky holders{" "}
            </div>
          </RoadmapBody>
        </RoadmapItem>
        <RoadmapItem>
          <PinImage src={pinIcon} />
          <RoadmapHeader>
            <p>20% SOLD</p>
          </RoadmapHeader>
          <RoadmapBody>
            <div>
              10x FatMen & 1x{" "}
              <StyledLink
                href="https://www.angryboars.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Angry Boar
              </StyledLink>{" "}
              will be ruffled to lucky holders{" "}
            </div>
          </RoadmapBody>
        </RoadmapItem>
        <RoadmapItem>
          <PinImage src={pinIcon} />
          <RoadmapHeader>
            <p>30% SOLD</p>
          </RoadmapHeader>
          <RoadmapBody>
            <div>
              iPhone 13 pro max Giveaway (or equivalent in ETH) to a lucky
              FatMan holder
            </div>
          </RoadmapBody>
        </RoadmapItem>
        <RoadmapItem>
          <PinImage src={pinIcon} />
          <RoadmapHeader>
            <p>40% SOLD</p>
          </RoadmapHeader>
          <RoadmapBody>
            <div>
              <StyledLink
                href="https://opensea.io/collection/timepiece-community"
                target="_blank"
                rel="noopener noreferrer"
              >
                TIMEPiece Community NFT Giveaway worth of 1 ETH
              </StyledLink>
            </div>
          </RoadmapBody>
        </RoadmapItem>
        <RoadmapItem>
          <PinImage src={pinIcon} />
          <RoadmapHeader>
            <p>50% SOLD</p>
          </RoadmapHeader>
          <RoadmapBody>
            <div>5 ETH Giveaway split among 5 lucky holders</div>
          </RoadmapBody>
        </RoadmapItem>
        <RoadmapItem>
          <PinImage src={pinIcon} />
          <RoadmapHeader>
            <p>100% SOLD</p>
          </RoadmapHeader>
          <RoadmapBody>
            <div>
              Charity auction for the sale of NFT animation from TO420. The
              proceeds will go to the fund to support young artists on the
              dartflex.art platform
            </div>
          </RoadmapBody>
        </RoadmapItem>
      </RodmapContainer>
    </Container>
  );
};

export default Roadmap;
