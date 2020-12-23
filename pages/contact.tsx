import styled from "styled-components";
export default function ContactUs() {
  return (
    <Container>
      <AddressWrapper>
        <Address>Colonial Press LLC</Address>
        <Address>500 Torrey Lane</Address>
        <Address>PO Box 785</Address>
        <Address>Boalsburg, PA 16827</Address>
      </AddressWrapper>
      <HoursWrapper>
        <HoursTitle>Hours of Operation</HoursTitle>
        <Hours>Monday - Friday: 8am - 5pm</Hours>
        <Hours>Saturday & Sunday: Closed</Hours>
      </HoursWrapper>
      <ContactWrapper>
        <Contacts>Phone: 814-466-3380</Contacts>
        <Contacts>Fax: 814-466-7445</Contacts>
        <Contacts>Chris Dry: chris@colonialpres.net</Contacts>
        <Contacts>Stephanie Dry: steph@colonialpres.net</Contacts>
        <Contacts>Judy Lucas: judy@colonialpres.net</Contacts>
      </ContactWrapper>
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
  align-items: center;
`
const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2% 3%;
`
const Address = styled.p`

`
const HoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 3%;
`
const HoursTitle = styled.h2`
  font-size: 35px;
`
const Hours = styled.p`

`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 3%;
`
const Contacts = styled.p`

`