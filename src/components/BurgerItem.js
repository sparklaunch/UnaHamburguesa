import classes from "./BurgerItem.module.css";

function BurgerItem(props) {
  const { id, nameKor, nameEng, price } = props.data;
  return <div className={classes.burgerItem}>{nameKor}</div>;
}

export default BurgerItem;
