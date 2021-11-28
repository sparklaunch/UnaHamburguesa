import classes from "./OrderListItem.module.css";
import burgers from "../dummyData";

function OrderListItem({ name, quantity }) {
  const theBurger = burgers.find((burger) => burger.nameEng === name);
  return (
    <div className={classes.orderListItem}>
      <p>{theBurger.nameKor}</p>
      <div className={classes.right}>
        <p>KRW {theBurger.price.toLocaleString()}</p>
        <p>{quantity} EA</p>
      </div>
    </div>
  );
}

export default OrderListItem;
