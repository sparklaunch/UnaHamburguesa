import classes from "./OrderList.module.css";
import OrderListItem from "./OrderListItem";

function OrderList(props) {
  const orders = props.orders;
  console.log(orders);
  return <div className={classes.orderList}></div>;
}

export default OrderList;
