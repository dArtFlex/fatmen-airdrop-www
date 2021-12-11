import React, { useState } from "react";
import styled from "styled-components";
import ToTalMintedHeader from "./TotalMintedHeader/TotalMintedHeader";
import TotalMintedTitle from "./TotalMintedTitle/TotalMintedTitle";
import MintNow from "./MintNow/MintNow";
import Fatties from "./Fatties/Fatties";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledBox = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 18px 94px;
  background-color: #e9fff2;
  text-transform: uppercase;
  // min-height: 700px; // высота без кнопок, закомментировать если нужно включить кнопки
  font-weight: 700;

  @media screen and (max-width: 1475px) {
    padding: 16px 14px;
    // min-height: 500px; // высота без кнопок, закомментировать если нужно включить кнопки
  }

  @media screen and (max-width: 825px) {
    padding: 16px 14px;
    // min-height: 400px; // высота без кнопок, закомментировать если нужно включить кнопки
  }

  @media screen and (max-width: 595px) {
    min-height: ${({ visible }) =>
      visible ? "950px" : "400px"}; // высота с кнопками
    // min-height: 400px; // высота без кнопок, закомментировать если нужно включить кнопки
  }

  @media screen and (max-width: 500px) {
    min-height: ${({ visible }) =>
      visible ? "980px" : "400px"}; // высота с кнопками
    // min-height: 400px; // высота без кнопок, закомментировать если нужно включить кнопки
  }

  @media screen and (max-width: 450px) {
    min-height: ${({ visible }) =>
      visible ? "920px" : "400px"}; // высота с кнопками
    // min-height: 300px; // высота без кнопок, закомментировать если нужно включить кнопки
  }

  @media screen and (max-width: 380px) {
    min-height: ${({ visible }) =>
      visible ? "940px" : "400px"}; // высота с кнопками
    // min-height: 300px; // высота без кнопок, закомментировать если нужно включить кнопки
  }
`;

const TimerContainer = styled.div`
  margin-top: 40px;
  > h1 {
    font-size: 24px;
    text-align: center;
    color: rgb(238, 70, 70);
  }
`;

const Timer = styled.div`
  color: rgb(238, 70, 70);
  font-size: 32px;
  text-align: center;
  text-shadow: 1px 1px #717171;
`;

const StyledSpan = styled.span`
  color: rgb(255 110 110);
`;

const StyledNotification = styled.div`
  font-size: 10px;
`;

function TotalMinted() {
  const [visible, setVisibleCallback] = useState(false);

  const calculateTimer = () => {
    const nowUTCDate = new Date();
    const endUTCDate = new Date(Date.UTC(2021, 9, 1, 18));
    const distance = endUTCDate - nowUTCDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds, distance];
  };

  const renderCountDown = () => {
    if (calculateTimer()[4] > 0)
      return (
        <>
          {calculateTimer()[0] > 0 ? (
            <>
              {calculateTimer()[0]} <StyledSpan>days</StyledSpan>{" "}
            </>
          ) : (
            ""
          )}
          {calculateTimer()[1] > 0 ? (
            <>
              {calculateTimer()[1]} <StyledSpan>hours</StyledSpan>{" "}
            </>
          ) : (
            ""
          )}
          {calculateTimer()[2] > 0 ? (
            <>
              {calculateTimer()[2]} <StyledSpan>minutes</StyledSpan>
            </>
          ) : (
            ""
          )}
        </>
      );
    return <h3>Claim You DAF!</h3>;
  };

  return (
    <StyledBox visible={visible}>
      <ToTalMintedHeader />
      <TotalMintedTitle />
      <TimerContainer>
        <h1>The sale will be finished 01/10/2021 at 6pm UTC.</h1>
        <Timer>{renderCountDown()}</Timer>
      </TimerContainer>
      <MintNow setVisibleCallback={(value) => setVisibleCallback(value)} />
      <Fatties />
      <StyledNotification>
        <ToastContainer />
      </ StyledNotification>
    </StyledBox>
  );
}

export default TotalMinted;
