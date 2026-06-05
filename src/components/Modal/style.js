import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    position: fixed;
    max-width: 1200px;

    iframe {
        border: none;
    }
`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`

    