import Head from 'next/head'
import styled from "styled-components";
import DarkTheme from "./../styles/theme/DarkTheme";
import LightTheme from "./../styles/theme/LightTheme";
import PropsTheme from "./../styles/theme/PropsTheme";
import { ThemeContext } from "styled-components"
import { useContext } from "react";
export default function Home() {

  const themeContext = useContext(ThemeContext);

  const getImagePath = () => {
    return themeContext === DarkTheme ? "staff.jpg" : "staff.jpg"
}

  return (
    <Container>
      <TextWrapper>
        <AboutTitle>Who we are</AboutTitle>
        <UpperAboutText>Colonial Press was founded as a family-owned business in 1988. Since then, we have grown into a one-stop shop for everybody's printing needs. Our six employees (and one dog) ensure that everything meets out strict quality standards, as well as the needs of our customers.</UpperAboutText>
        <br />
        <LowerAboutText>Since 1988, it's been out goal to give you the quality you deserve at prices you can afford. Our press operators have over 30 years of industry experience, so you can rest assured your prints are in great hand.</LowerAboutText>
      </TextWrapper>
      <StaffImage src={`/img/home/${getImagePath()}`} />
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3% 8%;
  width: 100%;
  height: inherit;
  /* 10 year old chrome bug, use this instead of height 100% */
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  @media(max-width: 1050px) {
    flex-direction: column;
  }S
`;
const TextWrapper = styled.div`
    display: flex;
    width: 50%;
    padding-right: 5%;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 1050px) {
        width 90%;
        padding-right: 0%;
    }
`
const AboutTitle = styled.h2`
    display: flex; 
    font-size: 35px;
`
const UpperAboutText = styled.p`
    display: flex;
`
const LowerAboutText = styled.p`
    display: flex;
`
const StaffImage = styled.img`
    display: flex;
    flex-direction: row;
    padding-left: 5%;

    @media(max-width: 1050px) {
      flex-direction: column;
      padding-top: 3%;
      padding-left: 0%;
    }
`