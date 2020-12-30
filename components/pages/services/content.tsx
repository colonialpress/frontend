import styled, { css } from "styled-components";

export default function PrintingSection() {

    return (
        <Wrapper>
            <Container>
                <Header>Printing</Header>
                <TextBox>We can meet all your needs from layout and design, to printing full multi and single color. Additionally have introduced a new in-house mailing service allowing us to now mail your finished product in a quick and economical manner.</TextBox>
                <br />
                <ListContainer>
                    <ListItem>Letterheads</ListItem>
                    <ListItem>Envelopes</ListItem>
                    <ListItem>Business Cards</ListItem>
                    <ListItem>Forms</ListItem>
                    <ListItem>Statements</ListItem>
                    <ListItem>Invoices</ListItem>
                    <ListItem>Postcards</ListItem>
                    <ListItem>Newsletters</ListItem>
                    <ListItem>Self-Mailing Newsletter</ListItem>
                    <ListItem>Brochures</ListItem>
                    <ListItem>Flyers</ListItem>
                    <ListItem>Door Hangers</ListItem>
                    <ListItem>Table Tents</ListItem>
                    <ListItem>Annual Reports</ListItem>
                    <ListItem>Labels</ListItem>
                    <ListItem>Raffle Tickets</ListItem>
                    <ListItem>Menus</ListItem>
                    <ListItem>Menu Folders</ListItem>
                    <ListItem>Laser Checks</ListItem>
                    <ListItem>Deposit Slips</ListItem>
                    <ListItem>Presentation Folders</ListItem>
                    <ListItem>Blind & Foil Embossing</ListItem>
                    <ListItem>Announcements</ListItem>
                    <ListItem>Invitations</ListItem>
                </ListContainer>
            </Container>
            <br />
            <Container>
                <Header>Advertising</Header>
                <ListContainer>
                    <ListItem>Pens</ListItem>
                    <ListItem>Pencils</ListItem>
                    <ListItem>Post-It Notes</ListItem>
                    <ListItem>Bags</ListItem>
                    <ListItem>Balloons</ListItem>
                    <ListItem>Mouse Pads</ListItem>
                    <ListItem>Cups</ListItem>
                    <ListItem>Mugs</ListItem>
                    <ListItem>Key Chains</ListItem>
                    <ListItem>Bumper Stickers</ListItem>
                    <ListItem>Window Clings</ListItem>
                    <ListItem>Magnetic Cards</ListItem>
                    <ListItem>Magnetic Signs</ListItem>
                    <ListItem>Yard Signs</ListItem>
                </ListContainer>
            </Container>
            <br />
            <Container>
                <Header>Finishing</Header>
                <ListContainer>
                    <ListItem>Collating</ListItem>
                    <ListItem>Collating to Booklets</ListItem>
                    <ListItem>Folding</ListItem>
                    <ListItem>Padding</ListItem>
                    <ListItem>Perforating</ListItem>
                    <ListItem>Stapling</ListItem>
                    <ListItem>Numbering</ListItem>
                    <ListItem>Scoring</ListItem>
                    <ListItem>Cutting</ListItem>
                    <ListItem>Binding</ListItem>
                    <ListItem>Drilling</ListItem>
                    <ListItem>Die Cutting</ListItem>
                    <ListItem>Shipping</ListItem>
                    <ListItem>Mailing Service</ListItem>
                </ListContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-top: 3%;
`

const Container = styled.div`
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
    padding: 0 12%;
`

const Header = styled.h2`
    font-size: 35px;
    padding: 16px 0;
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
    display: -webkit-flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: auto;
    padding: 8px 8%;
`

const ListItem = styled.p`
    display: flex;
    height: auto;
    width: 25%;
    font-size: 18px;
    text-align: left;
    color: #383838;
    flex: 0 1 auto;

    @media(max-width: 800px) {
        width: 50%
    }
    @media(max-width: 600px) {
        width: 100%
    }
`