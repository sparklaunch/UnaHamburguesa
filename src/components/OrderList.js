import classes from "./OrderList.module.css";
import OrderListItem from "./OrderListItem";
import Total from "./Total";

function OrderList({ orders }) {
  const keys = Object.keys(orders);
  return (
    <div className={classes.orderList}>
      <h3>주문 목록</h3>
      <ul>
        {keys.map((key, index) => (
          <li key={index}>
            <OrderListItem name={key} quantity={orders[key]} />
          </li>
        ))}
      </ul>
      <hr />
      <Total />
    </div>
  );
}

export default OrderList;
