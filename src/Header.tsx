import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import './App.css';

const Header = () => {
  return (
    <HeaderContainer>
      <HouseIcon>
        <FontAwesomeIcon icon={faHome} />
      </HouseIcon>
      <nav>
        <ul>
          <li>Menu</li>
          <li>Adress</li>
          <li>Contact</li>
          <li>Work with us</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #000000;
  padding: 1.6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HouseIcon = styled.div`
  color: white;
  margin-left: 25px;
  font-size: 2.2rem;
`;

export default Header;
