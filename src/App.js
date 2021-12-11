import './App.css';
import React from "react";
import styled from 'styled-components'
import TotalMinted from "./Components/TotalMinted/TotalMinted";
import Welcome from "./Components/Welcome/Welcome";
import Metaverse from './Components/Metaverse'
import Details from "./Components/Details"
import Bonuses from "./Components/Bonuses"
import Footer from "./Components/Footer"
import Video from "./Components/Video";
import Roadmap from "./Components/Roadmap";

const StyledContainer = styled.div`
    box-sizing: border-box;
    min-width: 100%;
    min-height: 684px;
    margin: 0 auto;
    font-family: Rubik;
    
    img {
        user-select: none;
    }
`

function App() {
  return (
    <StyledContainer>
        <TotalMinted/>
        <Welcome/>
        <Video/>
        <Roadmap/>
        <Metaverse/>
        <Details/>
        <Bonuses/>
        <Footer/>
    </StyledContainer>
  );
}

export default App;
