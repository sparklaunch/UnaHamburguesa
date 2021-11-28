import classes from "./OrderListItem.module.css";
import burgers from "../dummyData";
import { useContext } from "react";
import { BurgerContext } from "../store/BurgerContext";

function OrderListItem({ name, quantity }) {
  const { setSelectedBurgers } = useContext(BurgerContext);
  const theBurger = burgers.find((burger) => burger.nameEng === name);
  function removeHandler() {
    const target = theBurger.nameEng;
    setSelectedBurgers((previous) => {
      const copy = { ...previous };
      delete copy[target];
      return copy;
    });
  }
  return (
    <div className={classes.orderListItem}>
      <p>{theBurger.nameKor}</p>
      <div className={classes.right}>
        <p>KRW {theBurger.price.toLocaleString()}</p>
        <p>{quantity} EA</p>
        <p className={classes.removeButton} onClick={removeHandler}>
          &times;
        </p>
      </div>
    </div>
  );
}

export default OrderListItem;
