import styled, { css } from "styled-components";
import DarkTheme from "../../styles/theme/DarkTheme";
import { ThemeContext } from "styled-components"
import { useContext } from "react";
import ActiveHeader from "./../ActiveHeader";
const headertexts = [
    {
        link: "/",
        text: "Yesteryear's service with tomorrow's technology."
    },
    {
        link: "/services",
        text: "Services"
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

    const themeContext = useContext(ThemeContext);

    const getHeaderImagePath = () => {
        return themeContext === DarkTheme ? "header.jpg" : "header.jpg"
    }

    return (
        <Container>
            <HeaderWrapper>
                <HeaderImage src={`/img/header/${getHeaderImagePath()}`} alt={"Header"} />
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

    @media(max-width: 1000px) {
        top: 30%;
        padding: 3px;
    }
`

const HeaderText = styled.div`
    font-size: 3rem;
    color: white;
    @media(max-width: 1000px) {
        font-size: 2rem;
    }
`