import classes from "./OrderListItem.module.css";

function OrderListItem({ name, quantity }) {
  return (
    <div className={classes.orderListItem}>
      <p>{name}</p>
      <p>{quantity}</p>
    </div>
  );
}

export default OrderListItem;
