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
        <p>ilpizzenza@manarola.com</p>
        <p>TEL: 0000-00000</p>
      </Section>

      <Section>
        <Header>
          <Title>ADRESS</Title>
        </Header>
        <p>VIA Renato BirolListItem 149 19017 Manarola, Riomaggiore SP ITALY</p>
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
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  color: #ffffff;
  padding: 0.2rem 0;
`;
