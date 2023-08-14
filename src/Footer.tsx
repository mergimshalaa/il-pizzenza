import styled from 'styled-components';

export function Footer() {
  return (
    <FooterWrapper>
      
      <div>
        <div>
          <h3>OPENING HOURS</h3>
        </div>
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
      </div>

      <div>
        <div>
          <h3>CONTACT</h3>
        </div>
        <p>ilpizzenza@manarola.com</p>
        <p>TEL: 0000-00000</p>
      </div>

      <div>
        <div>
          <h3>ADRESS</h3>
        </div>
        <p>VIA Renato Birolli 149 19017 Manarola, Riomaggiore SP ITALY</p>
      </div>

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
