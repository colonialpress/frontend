import styled, { css } from "styled-components";

export default function PrintingSection() {

    return (
        <Wrapper>
            <Container>
                <Header>Design</Header>
                <TextBox>We offer a complete line of layout and design options. From single to full color formats. We work closely with our clients to achieve the design they are imagining.</TextBox>
            </Container>
            <Container>
                <Header>Pre-Press</Header>
                <TextBox>We use state of the art technology with a color match proofing system. We work with many different programs and file types for the Mac and PC platforms.</TextBox>
            </Container>
            <Container>
                <ListContainer>
                    <ListGroup>
                        <ListHeader>Mac:</ListHeader>
                        <ListItem>InDesign</ListItem>
                        <ListItem>Illustrator</ListItem>
                        <ListItem>Photoshop</ListItem>
                        <ListItem>QuarkXPress</ListItem>
                        <ListItem>Pagemaker</ListItem>
                        <ListItem>Microsoft Word</ListItem>
                        <ListItem>Microsoft Publisher</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListHeader>PC:</ListHeader>
                        <ListItem>Illustrator</ListItem>
                        <ListItem>Photoshop</ListItem>
                        <ListItem>QuarkXPress</ListItem>
                        <ListItem>Pagemaker</ListItem>
                        <ListItem>Microsoft Word</ListItem>
                        <ListItem>Microsoft Publisher</ListItem>
                    </ListGroup>
                    <ListGroup>
                        <ListHeader>Files Accepted:</ListHeader>
                        <ListItem>CD</ListItem>
                        <ListItem>Flash</ListItem>
                        <ListItem>Zip</ListItem>
                        <ListItem>E-Mail</ListItem>
                        <ListItem>FTP Site</ListItem>
                    </ListGroup>
                </ListContainer>
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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 5% 15%;
    @media(max-width: 800px) {
        padding: 12% 8%;
    }
`

const Header = styled.h2`
    font-size: 35px;
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

const ListContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: inherit;
`

const ListGroup = styled.div`
    width: 33.3333%;
    padding: 2% 10%;

    @media(max-width: 800px) {
        width: 100%;
      padding: 5% 10%;
    }
`

const ListHeader = styled.h2`
    font-size: 24px;
    @media(max-width: 800px) {
        font-size: 20px;
    }
`

const ListItem = styled.p`
    font-size: 18px;
    color: #383838;

    @media(max-width: 800px) {
        font-size: 16px;
    }
`