import {
  faMartiniGlass,
  faPizzaSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";
import drinkImage from "./img/drienks.png";
import drinkBgimage from "./img/drinks-bgcolor.png";
import pastaBgimage from "./img/pasta-bgcolor.png";
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

const underlineAnimation = keyframes`
  0%, 100% {
    width: 0;
  }
  50% {
    width: 100%;
  }
`;

const StyledHeader = styled.h2`
  color: #000000;
  font-size: 68px;
  position: relative;
  font-family: "baskerville";
  font-weight: bold;
  cursor: pointer;  
  

  &:hover {
    &:before {
      content: "";
      position: absolute;
      bottom: -0.3rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: #000000;
      animation: ${underlineAnimation} 3s forwards;
      cursor: pointer;
    }
  }

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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
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

  @media (max-width: 1024px) {
    width: 100%;
    display: none;
  }
`;

const PastaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #f9f5f6;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    background-image: url(${pastaBgimage});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

/* ------------- STYLING FOR COCKTAILS WITH IMAGE, TEXT & ICON ------------ */
const DrinkWrapper = styled.div`
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

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    display: none;
  }
`;

const DrinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #f31559;

  @media (max-width: 1024px) {
    width: 100%;
    background-image: url(${drinkBgimage});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;