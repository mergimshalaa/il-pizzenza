import {
  faMartiniGlass,
  faPizzaSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pizzaImage from "./img/pizze.png";
import pastaImage from "./img/pastaaa.png";
import styled from "styled-components";

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

      <div>
        <div>
          <FontAwesomeIcon icon={faMartiniGlass} />
        </div>
        <div>
          <h2>COCKTAILS.</h2>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

/* -------- STYLING FOR PIZZA WITH IMAGE, TEXT & ICONS -------- */

const PizzaWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 600px;
  width: 100%;
  font-weight: 400;
  font-size: 2.5rem;
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
`;

const StyledHeader = styled.h2`
  color: white;
  font-size: 4rem;
  position: relative;
  cursor: pointer;
  -webkit-text-stroke: 1px black;
`;

/* -------- STYLING FOR PASTA WITH IMAGE, TEXT & ICONS -------- */

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
  background: #f9f5f6;
  flex-direction: column;
`;
