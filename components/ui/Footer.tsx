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
        <Wrapper>
            <Box>
                <h2>Ready to get printing?</h2>
                <p>See what we are capable of by checking out our services or contact us.</p>
                <ButtonWrapper>
                    <Button>Our Services</Button>
                </ButtonWrapper>
            </Box>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0 0.5em;
    /* This will basically push everything to left and right. */
    justify-content: center;
`
const Box = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 0 0.5em;
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
        box-shadow: 0px 18px 35px ${props => props.theme.boxShadowColor};
    `}
`
const ButtonWrapper = styled.div`
    width: 15%;
    padding-left: 1%;
`