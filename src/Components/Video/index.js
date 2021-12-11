import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
    max-width: 560px;
    margin: 30px auto 0;
    // transform: scale(1.25);
    
    @media screen and (max-width: 720px) {
        transform: none;
    }
    
    @media screen and (max-width: 580px) {
        max-width: 400px;
        
        iframe {
            width: 400px;
            height: 225px;
        }
    }
    
    @media screen and (max-width: 580px) {
        max-width: 300px;
        
        iframe {
            width: 300px;
            height: 168.75px;
        }
    }
    
    div {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        display: block;
    }
`

const Video = () => {
    return (
        <Container>
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2F9tjAVb-lY"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </Container>
    );
};

export default Video;
