import styled from "styled-components";
import logo from "./img/logo1.png";
import backgroundImage from "./img/ManarolaItaly.png";

const FirstPage = () => {
  return (
    <HomePageWrapper>
      <div>
        <LogoImage src={logo} alt="Logotyp" />
        <p>
          Your local pasta bar in Manarola. Homemade pasta & pizza in the
          classic Italian way with small dishes made from fresh ingredients.
        </p>
      </div>
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 500px;
  height: 360px;
`;

export default FirstPage;