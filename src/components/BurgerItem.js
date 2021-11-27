import classes from "./BurgerItem.module.css";
import { useContext } from "react";
import { BurgerContext } from "../store/BurgerContext";

function BurgerItem(props) {
  const { id, nameKor, nameEng, price } = props.data;
  const { selectedBurgers, setSelectedBurgers } = useContext(BurgerContext);
  function burgerItemClickHandler() {
    const selectedBurger = nameEng;
    setSelectedBurgers((previous) => {
      if (!previous[selectedBurger]) {
        const copy = { ...previous };
        copy[selectedBurger] = 1;
        return copy;
      } else {
        const copy = { ...previous };
        copy[selectedBurger] += 1;
        return copy;
      }
    });
  }
  return (
    <div className={classes.burgerItem} onClick={burgerItemClickHandler}>
      <img src={`resources/${nameEng}.png`} alt={nameEng} />
      <h2 className={classes.productName}>{nameKor}</h2>
      <h3 className={classes.price}>\{price.toLocaleString()}</h3>
    </div>
  );
}

export default BurgerItem;
