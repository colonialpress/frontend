import styled from "styled-components";
export default function PrePressDesign() {
  return (
    <Container>
      <Item>
        <TextTitle>Design</TextTitle>
        <Text>We offer a complete line of layout and design options. From single to full color formats. We work closely with our clients to achieve the design they are imagining.</Text>
      </Item>
      <Item>
        <TextTitle>Pre-Press</TextTitle>
        <Text>We use state of the art technology with a color match proofing system. We work with many different programs and file types for the Mac and PC platforms.</Text>
      </Item>
      <Item>
        <ListsContainer>
          <ListGroup>
            <ListTitle>Mac:</ListTitle>
            <ListContainer>
              <ListItem>InDesign</ListItem>
              <ListItem>Illustrator</ListItem>
              <ListItem>Photoshop</ListItem>
              <ListItem>QuarkXPress</ListItem>
              <ListItem>PageMaker</ListItem>
              <ListItem>Microsoft Word</ListItem>
              <ListItem>Microsoft Publisher</ListItem>
            </ListContainer>
          </ListGroup>
          <ListGroup>
            <ListTitle>PC:</ListTitle>
            <ListContainer>
              <ListItem>PageMaker</ListItem>
              <ListItem>QuarkXPress</ListItem>
              <ListItem>Illustrator</ListItem>
              <ListItem>Photoshop</ListItem>
              <ListItem>Microsoft Word</ListItem>
              <ListItem>Microsoft Publisher</ListItem>
            </ListContainer>
          </ListGroup>
          <ListGroup>
            <ListTitle>Files Accepted:</ListTitle>
            <ListContainer>
              <ListItem>Zip</ListItem>
              <ListItem>Flash</ListItem>
              <ListItem>E-Mail</ListItem>
              <ListItem>FTP Site</ListItem>
            </ListContainer>
          </ListGroup>
        </ListsContainer>
      </Item>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3% 8%;
  width: 100%;
  height: inherit;
  /* 10 year old chrome bug, use this instead of height 100% */
  flex-grow: 1;
  justify-content: center;
  align-items: left;

  @media(max-width: 1050px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  display: inline;
  padding: 2% 0%;

  @media(max-width: 1000px) {
    display: flex;
    padding: 3% 10%;
    flex-direction: column;
  }
`

const TextTitle = styled.h2`
  font-size: 35px;
`
const Text = styled.p`

`

const ListTitle = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 28px;
`
const ListsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  height: 100%;

  @media(max-width: 1000px) {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
  }
`

const ListContainer = styled.div`
  width: 33.33%;

  @media(max-width: 1000px) {
    width: 100%;
  }
`
const ListGroup = styled.div`
display: flex;
flex-direction: column;
`
const ListItem = styled.p`

`