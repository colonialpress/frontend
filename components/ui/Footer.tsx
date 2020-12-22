import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import DarkTheme from "../../styles/theme/DarkTheme";
import LightTheme from "../../styles/theme/LightTheme";
import PropsTheme from "../../styles/theme/PropsTheme";
import Button from "./Button"
import { ThemeContext } from "styled-components"
import { useContext } from "react";

export default function Footer() {

    const themeContext = useContext(ThemeContext);

    return (
        <Container>
            <Box>
                <TextWrapper>
                    <ReadyText>Ready to get printing?</ReadyText>
                    <CabailitiesText>See what we are capable of by checking out our services or contact us.</CabailitiesText>
                </TextWrapper>
                <ButtonWrapper>
                    <Button>Our Services</Button>
                </ButtonWrapper>
            </Box>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
  /* 10 year old chrome bug, use this instead of height 100% */
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
const TextWrapper = styled.div`
    display: flex;
    padding-left: 15%;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 800px) {
        padding-left: 10%;
    }
`
const ReadyText = styled.h2`
    font-size: 35px;

    @media(max-width: 1050px) {
        font-size: 25px;
    }
`
const CabailitiesText = styled.p`
    @media(max-width: 1050px) {
        font-size: 15px;
    }

`
const Box = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 10px 0.5em;
    /* This will basically push everything to left and right. */
    justify-content: center;

    /* Want a line instead of shadow in dark mode. */
    background: ${(props: PropsTheme) => props.theme.background};
    ${props => props.theme === DarkTheme && css`
        border-bottom: 1px solid #333;
        background: black;
    `}
    /* Box shadow for light mode. */
    ${(props: PropsTheme) => props.theme === LightTheme && css`
        box-shadow: 0px 25px 50px ${props => props.theme.boxShadowColor};
    `}

    @media(max-width: 800px) {
        width: 92%;
        padding: 6px 0.5em;
    }
`
const ButtonWrapper = styled.div`
    width: 100%;
    padding-left: 15%;

    @media(max-width: 800px) {
        padding-left: 10%;
    }
`