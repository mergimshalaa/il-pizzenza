import styled from 'styled-components';

export function Footer() {
  return (
    <FooterWrapper>
      
      <Section>
        <Header>
          <h3>OPENING HOURS</h3>
        </Header>
        <div>
          <ul>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday </li>
            <li>Sunday</li>
          </ul>
          <ul>
            <li>5pm - 10pm</li>
            <li>5pm - 10pm</li>
            <li>5pm - 10pm</li>
            <li>5pm - 10pm</li>
            <li>6pm - 11pm</li>
            <li>7pm - 11pm </li>
            <li>CLOSED</li>
          </ul>
        </div>
      </Section>

      <Section>
        <Header>
          <h3>CONTACT</h3>
        </Header>
        <p>ilpizzenza@manarola.com</p>
        <p>TEL: 0000-00000</p>
      </Section>

      <Section>
        <div>
          <Header>ADRESS</Header>
        </div>
        <p>VIA Renato Birolli 149 19017 Manarola, Riomaggiore SP ITALY</p>
      </Section>

    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 1rem;
  font-size: 1.3rem;
  // background-color: #000000;
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