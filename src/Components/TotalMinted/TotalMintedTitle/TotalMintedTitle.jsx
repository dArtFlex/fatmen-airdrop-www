import React from "react";
import styled from "styled-components";
import partner from "../../../assets/desktop/420.svg";

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 144px auto 0;
  width: 750px;
  height: fit-content;

  @media screen and (max-width: 1475px) {
    width: 660px;
    margin-top: 100px;
    font-size: 50px;
    line-height: 58px;
  }

  @media screen and (max-width: 1300px) {
    width: 500px;
    margin-top: 55px;
    font-size: 48px;
    line-height: 60px;
  }

  @media screen and (max-width: 1000px) {
    width: 474px;
  }

  @media screen and (max-width: 650px) {
    width: 400px;
    flex-direction: row;
    margin-left: 0;
    margin-top: 65px;
    font-size: 40px;
    align-items: center;
  }

  @media screen and (max-width: 475px) {
    width: 355px;
    font-size: 30px;
    line-height: 38px;
  }

  @media screen and (max-width: 400px) {
    width: fit-content;
    font-size: 30px;
    line-height: 32px;
  }
`;

const StyledTitle = styled.div`
  position: relative;
  margin: 0;
  width: 945px;
  font-weight: 900;
  font-size: 64px;
  line-height: 76px;
  text-align: center;

  @media screen and (max-width: 1475px) {
    width: 670px;
    font-size: 46px;
    line-height: 54px;
  }

  @media screen and (max-width: 1320px) {
    width: 600px;
    font-size: 36px;
    line-height: 44px;
  }

  @media screen and (max-width: 990px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (max-width: 870px) {
    max-width: 375px;
    min-width: 375px;
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (max-width: 600px) {
    max-width: 275px;
    min-width: 275px;
    font-size: 22px;
    line-height: 34px;
  }

  @media screen and (max-width: 450px) {
    max-width: 200px;
    min-width: 200px;
    font-size: 16px;
    line-height: 18px;
  }
`;

const PartnerContainer = styled.div`
  position: absolute;
  top: 7px;
  left: calc(100% + 25px);
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  @media screen and (max-width: 1320px) {
    height: 120px;
    left: calc(100% + 65px);
  }

  @media screen and (max-width: 1215px) {
    width: 230px;
    font-size: 20px;
    left: calc(100% + 25px);
  }

  @media screen and (max-width: 1110px) {
    width: 170px;
    height: 105px;
    font-size: 16px;

    img {
      width: 140px;
      height: 75px;
    }
  }

  @media screen and (max-width: 930px) {
    width: 155px;
    height: 100px;
    font-size: 14px;

    img {
      width: 60px;
      max-width: 60px;
      height: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    width: 125px;
    height: 95px;
    font-size: 11px;

    img {
      width: 60px;
      max-width: 60px;
      height: 50px;
    }
  }

  @media screen and (max-width: 450px) {
    a {
      height: fit-content;
    }

    top: 0;
    left: calc(93% + 25px);
    width: 95px;
    height: fit-content;
    font-size: 8px;
    line-height: 10px;

    img {
      width: 40px;
      max-width: 40px;
      height: 30px;
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

    @media screen and (max-width: 600px) {
      font-size: 20px;
      line-height: 22px;
    }
  }
`;

export default function TotalMintedTitle() {
  return (
    <>
      <StyledContainer>
        <StyledTitle>
          crypto <span style={{ color: "red" }}>FatMen Club</span> from a
          parallel metaverse
          <PartnerContainer>
            <span>collaboration</span>
            <a
              href="https://to420.ru/fatmen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageBox>
                <span>TO</span>
                <PartnerImg src={partner} alt="420" />
              </ImageBox>
            </a>
          </PartnerContainer>
        </StyledTitle>
      </StyledContainer>
    </>
  );
}
