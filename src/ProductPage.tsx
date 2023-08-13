import {
  faMartiniGlass,
  faPizzaSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import drinkImage from "./img/drienks.png";
import pastaImage from "./img/pastaaa.png";
import pizzaBgimage from "./img/pizze-bgcolor.png";
import pizzaImage from "./img/pizze.png";

const ProductPage = () => {
  return (
    <>
      <PizzaWrapper>
        <Bgdiv>
          <IconWrapper>
            <FontAwesomeIcon icon={faPizzaSlice} />
          </IconWrapper>
        </Bgdiv>
        <PizzaDiv>
          <StyledHeader>PIZZA.</StyledHeader>
        </PizzaDiv>
      </PizzaWrapper>

      <PastaWrapper>
        <PastaIcondiv>
          <IconWrapper>
            <FontAwesomeIcon icon={faUtensils} />
          </IconWrapper>
        </PastaIcondiv>
        <PastaDiv>
          <StyledHeader>PASTA.</StyledHeader>
        </PastaDiv>
      </PastaWrapper>

      <DrinkWrapper>
        <DrinkBgdiv>
          <IconWrapper>
            <FontAwesomeIcon icon={faMartiniGlass} />
          </IconWrapper>
        </DrinkBgdiv>
        <DrinkDiv>
          <StyledHeader>COCKTAILS.</StyledHeader>
        </DrinkDiv>
      </DrinkWrapper>
    </>
  );
};

export default ProductPage;

/* ------------- STYLING FOR PIZZA WITH IMAGE, TEXT & ICON ------------ */

const PizzaWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 600px;
  width: 100%;
  font-weight: 400;
  font-size: 2.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Bgdiv = styled.div`
  background-image: url(${pizzaImage});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    display: none;
  }
`;

const IconWrapper = styled.div`
  font-size: 11rem;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PizzaDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #7a9d54;

  @media (max-width: 1024px) {
    width: 100%;
    background-image: url(${pizzaBgimage});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

const StyledHeader = styled.h2`
  color: white;
  font-size: 4rem;
  position: relative;
  font-family: "baskerville";
  cursor: pointer;
  -webkit-text-stroke: 1px black;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;

/* ------------ STYLING FOR PASTA WITH IMAGE, TEXT & ICON ------------- */

const PastaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 100%;
  font-weight: 400;
  font-size: 2.5rem;
`;

const PastaIcondiv = styled.div`
  background-image: url(${pastaImage});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const PastaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #F9F5F6;
  flex-direction: column;
`;

/* ------------- STYLING FOR COCKTAILS WITH IMAGE, TEXT & ICON ------------ */

const DrinkWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 600px;
  width: 100%;
  font-weight: 400;
  font-size: 2.5rem;
`;

const DrinkBgdiv = styled.div`
  background-image: url(${drinkImage});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const DrinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #f31559;
`;
