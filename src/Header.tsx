import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import './App.css';

const Header = () => {
  return (
    <HeaderContainer>
      <HouseIcon>
        <FontAwesomeIcon icon={faHome} />
      </HouseIcon>
      <Menu>
        <ul>
          <li>Menu</li>
          <li>Adress</li>
          <li>Contact</li>
          <li>Work with us</li>
        </ul>
        <HamburgerIcon>
          <FontAwesomeIcon icon={faBars} style={{ color: 'white', fontSize: '2.2rem', cursor: 'pointer' }} />
        </HamburgerIcon>
      </Menu>
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

const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    margin-right: 7rem;

    li {
      color: white;
      margin-left: 4rem;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      cursor: pointer;

      @media (max-width: 1024px) {
        margin-left: 3rem;
        font-size: 1.3rem;
      }
    }

    @media (max-width: 1024px) {
      margin-right: 2rem;
    }

    @media (max-width: 640px) {
      display: none;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
    padding: 0 2rem;
    align-items: center;
  }
`;

export default Header;