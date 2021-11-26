import classes from "./BurgerItem.module.css";

function BurgerItem(props) {
  const { id, nameKor, nameEng, price } = props.data;
  return (
    <div className={classes.burgerItem}>
      <img src={`resources/${nameEng}.png`} alt={nameEng} />
      <h2 className={classes.productName}>{nameKor}</h2>
      <h3 className={classes.price}>\{price.toLocaleString()}</h3>
    </div>
  );
}

export default BurgerItem;
