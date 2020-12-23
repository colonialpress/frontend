import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import DarkTheme from "../../styles/theme/DarkTheme";
import { ThemeContext } from "styled-components"
import { useContext } from "react";
import { useRouter } from "next/router";
import ActiveHeader from "./../ActiveHeader";
const headertexts = [
    {
        link: "/",
        text: "Yesteryear's service with tomorrow's technology."
    },
    {
        link: "/services",
        text: "Our Services"
    },
    {
        link: "/prepressdesign",
        text: "Pre-Press & Design"
    },
    {
        link: "/contact",
        text: "Contact Us"
    }
]

export default function Header() {
    const route = useRouter();

    const themeContext = useContext(ThemeContext);

    const getHeaderImagePath = () => {
        return themeContext === DarkTheme ? "header.jpg" : "header.jpg"
    }

    return (
        <Container>
            <HeaderWrapper>
                <HeaderImage src={`/img/header/${getHeaderImagePath()}`} />
                {headertexts.map(entry => <HeaderTextWrapper>
                    <ActiveHeader href={entry.link}>
                        <HeaderText>{entry.text}</HeaderText>
                    </ActiveHeader>
                </HeaderTextWrapper>)
                }
            </HeaderWrapper>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* 10 year old chrome bug, use this instead of height 100% */
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    position: relative;
`

const HeaderImage = styled.img`
    width: 100%;
`

const HeaderTextWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 40%;
    left: 10%;
    padding: 5px;
`

const HeaderText = styled.div`
    font-size: 3rem;
    color: white;
    
`