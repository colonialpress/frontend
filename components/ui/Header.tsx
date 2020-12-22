import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import DarkTheme from "../../styles/theme/DarkTheme";
import LightTheme from "../../styles/theme/LightTheme";
import PropsTheme from "../../styles/theme/PropsTheme";
import { ThemeContext } from "styled-components"
import { useContext } from "react";

export default function Header() {

    const themeContext = useContext(ThemeContext);

    return (
        <Wrapper>
            
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
