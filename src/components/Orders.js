import classes from "./Orders.module.css";
import OrderList from "./OrderList";

function Orders(props) {
  const orders = props.data;
  if (orders) {
    return <OrderList orders={orders} />;
  } else {
    return (
      <div className={classes.emptyOrders}>
        <h3>장바구니가 비어있어요!!</h3>
      </div>
    );
  }
}

export default Orders;
