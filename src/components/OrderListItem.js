import classes from "./OrderListItem.module.css";

function OrderListItem({ order }) {
  return (
    <div className={classes.orderListItem}>
      <p>{order.nameKor}</p>
    </div>
  );
}

export default OrderListItem;
