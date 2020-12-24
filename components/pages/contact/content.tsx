import styled, { css } from "styled-components";
export default function ContactContent() {
    return (
        <Wrapper>
            <Container>
                <TextWrapper>
                    <TextBox>Colonial Press LLC</TextBox>
                    <TextBox>500 Torrey Lane</TextBox>
                    <TextBox>PO Box 785</TextBox>
                    <TextBox>Boalsburg, PA 16827</TextBox>
                </TextWrapper>
                <TextWrapper>
                    <Header>Hours of Operation</Header>
                    <TextBox><strong>Monday - Friday:</strong> 8am - 5pm</TextBox>
                    <TextBox><strong>Saturday & Sunday:</strong> Closed</TextBox>
                </TextWrapper>
                <TextWrapper>
                    <TextBox><strong>Phone:</strong> 814-466-3380</TextBox>
                    <TextBox><strong>Fax:</strong> 814-466-7445</TextBox>
                    <TextBox><strong>Chris Dry:</strong> chris@colonialpres.net</TextBox>
                    <TextBox><strong>Stephanie Dry:</strong> steph@colonialpres.net</TextBox>
                    <TextBox><strong>Judy Lucas:</strong> judy@colonialpres.net</TextBox>
                </TextWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5% 15%;
    @media(max-width: 800px) {
        padding: 5% 8%;
    }
`
const TextWrapper = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 3% 0;
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