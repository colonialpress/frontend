import styled, { css } from "styled-components";
import { ThemeContext } from "styled-components"
import { useContext } from "react";
import DarkTheme from "../../../styles/theme/DarkTheme";
export default function HomeContent() {

    const themeContext = useContext(ThemeContext);

    const getImagePath = () => {
        return themeContext === DarkTheme ? "staff.jpg" : "staff.jpg"
    }

    return (
        <Wrapper>
            <Container>
                <TextWrapper>
                    <Header>Who we Are</Header>
                    <TextBox>Colonial Press was founded as a family-owned business in 1988. Since then, we have grown into a one-stop shop for everybody's printing needs. Our six employees (and one dog) ensure that everything meets out strict quality standards, as well as the needs of our customers.</TextBox>
                    <br />
                    <TextBox>Since 1988, it's been out goal to give you the quality you deserve at prices you can afford. Our press operators have over 30 years of industry experience, so you can rest assured your prints are in great hand.</TextBox>
                </TextWrapper>
                <StaffImage src={`/img/home/${getImagePath()}`} alt={"Staff"} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  padding-top: 3%;
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 5% 15%;

    @media(max-width: 1050px) {
        padding: 5% 8%;
        flex-direction: column;
    }
`
const TextWrapper = styled.div`
    width: 50%;

    @media(max-width: 1050px) {
        width: 85%;
    }
`
const StaffImage = styled.img`
    width: 35%;
    display: flex;
    flex-direction: row;

    @media(max-width: 1050px) {
      width: 50%;
      flex-direction: column;
      padding-top: 50px;
    }
`
const Header = styled.h2`
    font-size: 35px;
    padding-bottom: 15px;

    @media(max-width: 800px) {
        font-size: 30px;
    }
`
const TextBox = styled.p`
    font-size: 20px;
    @media(max-width: 800px) {
        font-size: 15px;
    }
`