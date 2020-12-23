import styled from "styled-components";
export default function Services() {
  return (
    <Container>
      <Item>
        <ListTitle>Printing</ListTitle>
        <PrintingText>We can meet all your needs from layout and design, to printing full multi and single color. Additionally have introduced a new in-house mailing service allowing us to now mail your finished product in a quick and economical manner.</PrintingText>
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
      </Item>
      <Item>
        <ListTitle>Advertising</ListTitle>
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
      </Item>
      <Item>
      <ListTitle>Finishing</ListTitle>
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
      </Item>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3% 8%;
  width: 100vw;
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
  display: inline-flex;
  flex-direction: column;
  padding: 2% 0%;
  position: relative
`

const PrintingText = styled.p`
  display: flex;
  flex-direction: column;
`

const ListTitle = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: 35px;
`

const ListContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;
  overflow; hidden;

  @media(max-width: 1000px) {
    
  }
  @media(max-width: 800px) {
    
  }
  @media(max-width: 650px) {
    flex-wrap: nowarp;
    flex-direction: row;
    justify-content: center;
  }
`

const ListItem = styled.p`
  color: #383838;
  width: 25%;
  padding 1px 25px;
  @media(max-width: 1000px) {
    width: 33%;
  }
  @media(max-width: 800px) {
    width: 50%;
  }
  @media(max-width: 650px) {
    width: 100%;
  }
`