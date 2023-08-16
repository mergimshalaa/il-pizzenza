import styled from 'styled-components';

export function Footer() {
  return (
    <FooterWrapper>
      
      <Section>
        <Header>
          <Title>OPENING HOURS</Title>
        </Header>
        <Content>
          <List>
            <ListItem>Monday</ListItem>
            <ListItem>Tuesday</ListItem>
            <ListItem>Wednesday</ListItem>
            <ListItem>Thursday</ListItem>
            <ListItem>Friday</ListItem>
            <ListItem>Saturday </ListItem>
            <ListItem>Sunday</ListItem>
          </List>
          <List>
            <ListItem>5pm - 10pm</ListItem>
            <ListItem>5pm - 10pm</ListItem>
            <ListItem>5pm - 10pm</ListItem>
            <ListItem>5pm - 10pm</ListItem>
            <ListItem>6pm - 11pm</ListItem>
            <ListItem>7pm - 11pm </ListItem>
            <ListItem>CLOSED</ListItem>
          </List>
        </Content>
      </Section>

      <Section>
        <Header>
          <Title>CONTACT</Title>
        </Header>
        <Styledp>ilpizzenza@manarola.com</Styledp>
        <Styledp>TEL: 0000-00000</Styledp>
      </Section>

      <Section>
        <Header>
          <Title>ADRESS</Title>
        </Header>
        <Address>VIA Renato Birolli 149 19017 Manarola, Riomaggiore SP ITALY</Address>
      </Section>

    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 1rem;
  font-size: 1.3rem;
  background-color: #000000;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
  font-family: 'Baskerville';
`;

const Header = styled.div`
  display: flex;
  padding-bottom: 1rem;
  align-items: center;
`;


const Title = styled.h3`
  text-decoration: underline;
  font-size: 2rem;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  color: #ffffff;
  padding: 0.2rem 0;
`;

const Address = styled.p`
  color: #ffffff;
  text-align: center;
  max-width: 300px;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const Styledp = styled.p`
  color: #ffffff;
  max-width: 300px;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;