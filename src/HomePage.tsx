import styled from "styled-components";
import logo from "./img/logo1.png";
import backgroundImage from "./img/ManarolaItaly.png";

const FirstPage = () => {
  return (
    <HomePageWrapper>
      <Content>
        <LogoImage src={logo} alt="Logotyp" />
        <p>
          Your local pasta bar in Manarola. Homemade pasta & pizza in the
          classic Italian way with small dishes made from fresh ingredients.
        </p>
      </Content>
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

const Content = styled.div`
  text-align: center;
  color: white;
  padding: 0 20px;
  margin-bottom: 8rem;

  p {
    max-width: 400px;
    font-size: 1.5rem;
    margin: 20px auto 0;
    font-family: "Arial Italic", sans-serif;

    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`;

const LogoImage = styled.img`
  width: 500px;
  height: 360px;

  @media (max-width: 1024px) {
    width: 400px;
    height: 288px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 200px;
  }
`;

export default FirstPage;
