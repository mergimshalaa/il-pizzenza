import {
  faMartiniGlass,
  faPizzaSlice,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductPage = () => {
  return (
    <>
      <div>
        <div>
          <FontAwesomeIcon icon={faPizzaSlice} />
        </div>
        <div>
          <h2>PIZZA.</h2>
        </div>
      </div>

      <div>
        <div>
          <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div>
          <h2>PASTA.</h2>
        </div>
      </div>

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
