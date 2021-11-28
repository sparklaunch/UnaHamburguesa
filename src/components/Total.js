import { useContext } from "react";
import burgers from "../dummyData";
import { BurgerContext } from "../store/BurgerContext";
import classes from "./Total.module.css";

function Total() {
  const { selectedBurgers } = useContext(BurgerContext);
  const totals = Object.values(selectedBurgers).reduce(
    (previous, current) => previous + current,
    0
  );
  let totalPrice = 0;
  for (const key in selectedBurgers) {
    const price = burgers.find((burger) => burger.nameEng === key)["price"];
    const quantity = selectedBurgers[key];
    totalPrice += price * quantity;
  }
  return (
    <div className={classes.total}>
      <div className={classes.totals}>
        <p>총계</p>
      </div>
      <div className={classes.right}>
        <p>KRW {totalPrice.toLocaleString()}</p>
        <p>{totals} EA</p>
      </div>
    </div>
  );
}

export default Total;
